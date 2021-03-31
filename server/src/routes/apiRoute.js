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

// Delete a user
routes
    .route("/deleteuser/:id")
    .delete(dbController.deleteUser);

// Update a user information
routes
    .route("/updateuser")
    .patch(dbController.updateUser);

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

// delete a restaurant
routes
    .route("/deleterestaurant/:id")
    .delete(dbController.deletetRestaurant);

// Get restaurant Data from the online API
routes
    .route("/restaurantdata")
    .get(dbController.restaurantData);


module.exports = routes;