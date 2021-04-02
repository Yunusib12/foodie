const graphql = require("graphql");
const db = require("../models");
const { addRestToUserAndUserToRestGQL } = require("../controllers/functions");

// GraphQL Type
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLDate
} = graphql;


// User Object
const UserType = new GraphQLObjectType({
    name: "User",
    description: "User information",
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        userId: {
            type: GraphQLString
        },
        displayName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        photoURL: {
            type: GraphQLString
        },
        restaurants: {
            type: new GraphQLList(RestaurantType),
            resolve(parent, args) {
                return db.Restaurant.find({ _id: parent.restaurants });
            }
        },
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    })
});

// Restaurant Object
const RestaurantType = new GraphQLObjectType({
    name: "Restaurant",
    description: "Restaurant information",
    fields: () => ({
        _id: { type: GraphQLID },
        restaurantId: { type: GraphQLString },
        businessName: { type: GraphQLString },
        dbaName: { type: GraphQLString },
        licStatus: { type: GraphQLString },
        licenceCat: { type: GraphQLString },
        licenceAddDateTime: { type: GraphQLString },
        description: { type: GraphQLString },
        dayPhone: { type: GraphQLString },
        propertyID: { type: GraphQLString },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zipCode: { type: GraphQLString },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return db.User.find({ _id: parent.users })
            }
        },
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    })
});


// GraphQl Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {
                userId: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return db.User.findOne({ userId: args.userId });
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return db.User.find({});
            }
        },
        restaurant: {
            type: RestaurantType,
            args: {
                restaurantId: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return db.Restaurant.findOne({ restaurantId: args.restaurantId });
            }
        }
    }
});


// Mutation allow to create, update, delete functionality
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                userId: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                displayName: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                photoURL: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let user = new db.User({
                    userId: args.userId,
                    displayName: args.displayName,
                    email: args.email,
                    photoURL: args.photoURL
                });
                return user.save();
            }
        },
        updateUser: {
            type: UserType,
            args: {
                _id: {
                    type: GraphQLID
                },
                displayName: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                photoURL: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let user = {
                    displayName: args.displayName,
                    email: args.email,
                    photoURL: args.photoURL
                }
                return db.User.findOneAndUpdate({ _id: args._id }, user, { new: true });
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                _id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return db.User.findOneAndDelete({ _id: args._id });
            }
        },
        addRestaurant: {
            type: RestaurantType,
            description: "Add a new /  update an existing one restaurant ",
            args: {
                userId: { type: new GraphQLNonNull(GraphQLString) },
                restaurantId: { type: new GraphQLNonNull(GraphQLString) },
                businessName: { type: GraphQLString },
                dbaName: { type: GraphQLString },
                licStatus: { type: GraphQLString },
                licenceCat: { type: GraphQLString },
                licenceAddDateTime: { type: GraphQLString },
                description: { type: GraphQLString },
                dayPhone: { type: GraphQLString },
                propertyID: { type: GraphQLString },
                address: { type: GraphQLString },
                city: { type: new GraphQLNonNull(GraphQLString) },
                state: { type: new GraphQLNonNull(GraphQLString) },
                zipCode: { type: new GraphQLNonNull(GraphQLString) },
                latitude: { type: GraphQLString },
                longitude: { type: GraphQLString }
            },
            resolve(parent, args) {

                // retrieve the userId 
                const userId = args.userId;
                const restaurantId = args.restaurantId;
                const restaurantInfo = {
                    "restaurantId": args.restaurantId,
                    "businessName": args.businessName,
                    "dbaName": args.dbaName,
                    "licStatus": args.licStatus,
                    "licenceCat": args.licenceCat,
                    "licenceAddDateTime": args.licenceAddDateTime,
                    "description": args.description,
                    "dayPhone": args.dayPhone,
                    "propertyID": args.propertyID,
                    "city": args.city,
                    "state": args.state,
                    "zipCode": args.zipCode,
                    "latitude": args.latitude,
                    "longitude": args.longitude
                };

                return db.User
                    .findOne({ userId })
                    .then((userFound) => {

                        const userDBId = userFound._id;

                        if (userFound !== null) {

                            return db.Restaurant
                                .findOne({ restaurantId })
                                .then((restaurantFound) => {

                                    if (!restaurantFound) {

                                        // Add restaurant information into the database
                                        return db.Restaurant
                                            .create(restaurantInfo)
                                            .then((restaurantSaved) => {

                                                const restaurantDBId = restaurantSaved._id;

                                                return addRestToUserAndUserToRestGQL(restaurantDBId, userDBId);
                                            })
                                            .catch((error) => error);
                                    } else {
                                        // Check if the USER already SAVED the restaurant
                                        return db.User
                                            .findOne({ userId: userId })
                                            .then((userFound) => {

                                                const savedRestaurantId = restaurantFound._id;
                                                const userDBId = userFound._id;
                                                const savedRestaurantsByUser = userFound.restaurants;
                                                const isRestaurantSavedByUser = savedRestaurantsByUser.indexOf(savedRestaurantId) !== -1;

                                                console.log(`isRestaurantSavedByUser`, isRestaurantSavedByUser)
                                                if (!isRestaurantSavedByUser) {
                                                    // Add the restaurant information into user restaurant saved list
                                                    return addRestToUserAndUserToRestGQL(savedRestaurantId, userDBId);

                                                } else {

                                                    const errorMessage = `errorMessage: "You already saved the restaurant!`;

                                                    return errorMessage;
                                                }
                                            })
                                            .catch((error) => console.log(`${error}, You need an account to be able to save a resaurant. Register / Login `));
                                    }
                                })
                                .catch((error) => error);
                        }
                    })
                    .catch((error) => console.log(`${error} \nYou need an account to be able to save a resaurant. Register / Login `));


            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});