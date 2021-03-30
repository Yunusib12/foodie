const routes = require("express").Router();
const dbController = require("../controllers/dbController");

// Add a user
routes
    .route("/adduser")
    .post(dbController.addUser);

// Get All users
routes
    .route("/users")
    .get(dbController.users);

// Get a specific user information
routes
    .route("/user/:id")
    .get(dbController.user);

// Add a restaurant
routes
    .route("/addrestaurant")
    .post(dbController.addRestaurant);

// Gett all the saved restaurant(s)
routes
    .route("/restaurants")
    .get(dbController.restaurants);


// Get a specific restaurant
routes
    .route("/restaurant/:id")
    .get(dbController.restaurant);


module.exports = routes;