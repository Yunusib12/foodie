const routes = require("express").Router();
const dbController = require("../controllers/dbController");

// Add a user
routes
    .route("/adduser")
    .post(dbController.addUser);

// Get All users
routes
    .route("/getusers")
    .get(dbController.getAllUser);

// Get a specific user information
routes
    .route("/getuser/:id")
    .get(dbController.getUser);


routes
    .route("/saverestaurant")
    .put(dbController.saveUserLikedRestaurant);


// Add a restaurant
routes
    .route("/addrestaurant")
    .get(dbController.addRestaurant);

// Gett all the saved restaurant(s)
routes
    .route("/getrestaurants")
    .get(dbController.getAllSavedRestaurant);


// Add a specific restaurant
routes
    .route("/getrestaurant/:id")
    .get(dbController.getRestaurant);


module.exports = routes;