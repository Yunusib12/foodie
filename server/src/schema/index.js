const graphql = require("graphql");
const db = require("../models");
const axios = require("axios");
const { APP_PORT, SERVER_URL, API_VERSION } = require("../config");


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
                return axios
                    .get(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/user/${args.userId}`)
                    .then((res) => res.data)
                    .catch((error) => error);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return axios
                    .get(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/users`)
                    .then((users) => users.data)
                    .catch((error) => error);
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
                return axios
                    .get(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/restaurant/${args.restaurantId}`)
                    .then((restaurant) => restaurant.data)
                    .catch((error) => error);
            }
        },
        restaurants: {
            type: new GraphQLList(RestaurantType),
            resolve(parent, args) {
                return axios
                    .get(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/restaurants`)
                    .then((restaurants) => restaurants.data)
                    .catch((error) => error);
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
                },
                createdAt: {
                    type: GraphQLString
                },
                updatedAt: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                let user = {
                    userId: args.userId,
                    displayName: args.displayName,
                    email: args.email,
                    photoURL: args.photoURL
                };

                return axios
                    .post(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/adduser`, user)
                    .then((dbUser) => dbUser.data)
                    .catch((error) => error);
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
                    userId: args._id,
                    displayName: args.displayName,
                    email: args.email,
                    photoURL: args.photoURL
                }
                return axios
                    .patch(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/updateuser`, user)
                    .then((updatedUser) => updatedUser.data)
                    .catch((error) => error);
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                userId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {

                return axios
                    .delete(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/deleteuser/${args.userId}`)
                    .then((deletedUser) => deletedUser.data.message)
                    .catch((error) => error);
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

                const restaurantInfo = {
                    "userId": args.userId,
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

                return axios
                    .post(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/addrestaurant`, restaurantInfo)
                    .then((dbRestaurant) => dbRestaurant.data.restaurantUpdated)
                    .catch((error) => error);
            }
        },
        deleteRestaurant: {
            type: RestaurantType,
            description: "Delete a restaurant ",
            args: {
                restaurantId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return axios
                    .delete(`${SERVER_URL}:${APP_PORT}/api/${API_VERSION}/deleterestaurant/${args.restaurantId}`)
                    .then((deletedRestaurant) => deletedRestaurant.data.message)
                    .catch((error) => error);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});