// initialize express router for the API Routes
const routes = require("express").Router();

// import API Routes
const apiRoute = require("./apiRoute");

routes.use("/api/v1", apiRoute);

// default routes
routes.get("/", (req, res) => {
    res.send({
        message: "Thank you for testing out Foodie API , this endpoint has no data! Please refere to the following.",
        endPoints: {
            user: {
                addUser: {
                    httpMethod: "POST",
                    route: "/api/v1/adduser",
                    description: "The endpoint gives the ability to save the user information in the database."
                },
                users: {
                    httpMethod: "GET",
                    route: "/api/v1/users",
                    description: "The endpoint get all the users available in the database and their information."
                },
                user: {
                    httpMethod: "GET",
                    route: "/api/v1/user/{id}",
                    description: "The endpoint get a specific user information."
                },
                deleteUser: {
                    httpMethod: "DELETE",
                    route: "/api/v1/deleteuser/{id}",
                    description: "The endpoint get delete a user in the database."
                },
                updateUser: {
                    httpMethod: "PATCH",
                    route: "/api/v1/updateuser",
                    description: "The endpoint will update a user information in the database."
                }
            },
            restaurant: {
                addRestaurant: {
                    httpMethod: "POST",
                    route: "/api/v1/addrestaurant",
                    description: "The endpoint gives the ability to save the restaurant information in the database."
                },
                restaurants: {
                    httpMethod: "GET",
                    route: "/api/v1/restaurants",
                    description: "The endpoint get all the restaurants available in the database and their information."
                },
                restaurant: {
                    httpMethod: "GET",
                    route: "/api/v1/restaurant/{id}",
                    description: "The endpoint get a specific restaurant information."
                },
                deleteRestaurant: {
                    httpMethod: "DELETE",
                    route: "/api/v1/deleterestaurant/{id}",
                    description: "The endpoint get delete a restaurant in the database."
                }
            },
            apiRestaurantData: {
                restaurantData: {
                    httpMethod: "GET",
                    route: "/api/v1/restaurantdata",
                    queryParams: "?q=",
                    description: "The endpoint fetch the restaurant information from the ANALYZE BOSTON API."
                }
            }
        }
    })
})


module.exports = routes;