const graphql = require("graphql");
const db = require("../models");

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
        displayName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        photoURL: {
            type: GraphQLString
        },
        userCreated: {
            type: GraphQLDate
        },
        likedRestaurant: {
            type: new GraphQLList(RestaurantType),
            resolve(parent, args) {
                return db.User.findById(parent._id);
            }
        }

    })
});

// Restaurant Object
const RestaurantType = new GraphQLObjectType({
    name: "Restaurant",
    description: "Restaurant information",
    fields: () => ({
        restaurantId: { type: GraphQLString },
        businessName: { type: SGraphQLString },
        dbaName: { type: SGraphQLString },
        licStatus: { type: SGraphQLString },
        licenceCat: { type: SGraphQLString },
        licenceAddDateTime: { type: SGraphQLString },
        description: { type: SGraphQLString },
        dayPhone: { type: SGraphQLString },
        propertyID: { type: SGraphQLString },
        address: { type: SGraphQLString },
        city: { type: SGraphQLString },
        state: { type: SGraphQLString },
        zipCode: { type: SGraphQLString },
        latitude: { type: SGraphQLString },
        longitude: { type: SGraphQLString },
        savedAt: { type: SGraphQLDate },
        user: ""
    })
});