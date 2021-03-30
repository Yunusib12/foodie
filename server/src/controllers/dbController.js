// import necessary module 
const { ObjectId } = require("mongodb");

// import Schema 
const db = require("../models");

const dbController = {
    addUser: (req, res) => {

        const userInfo = req.body;

        //add the user information in the db
        db.User.create(userInfo)
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    users: (req, res) => {

        // retrieve all the the users available in the database
        db.User.find({})
            .populate("restaurants")
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    user: (req, res) => {

        const userId = req.params.id;

        // get a specific user information 
        db.User.find({ userId: userId })
            .populate("restaurants")
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    addRestaurant: (req, res) => {

        // retrieve the userId 
        const googleUserId = JSON.parse(JSON.stringify(req.body.userId));
        const restaurantId = req.body.restaurantId;
        const restaurants = req.body;

        delete restaurants.userId;

        // Check if the restaurant is already saved
        db.Restaurant.findOne({ restaurantId: restaurantId })
            .then((restaurantFound) => {

                if (!restaurantFound) {
                    // add the restaurant information in the database
                    db.Restaurant.create(restaurants)
                        .then((restaurantSaved) => res.send(restaurantSaved))
                        .catch((error) => res.status(500).send(error));
                }
            })
            .catch((error) => res.status(500).send(error));
    },
    restaurants: (req, res) => {

        // retrieve all Saved restaurant by user in the database
        db.Restaurant.find({})
            .populate("users")
            .then((dbRestaurants) => res.send(dbRestaurants))
            .catch((error) => res.status(500).send(error));
    },
    restaurant: (req, res) => {

        const restaurantId = req.params.id;

        // retrieve information on a saved restaurant
        db.Restaurant.find({ restaurantId: restaurantId })
            .populate("users")
            .then((dbRestaurant) => res.send(dbRestaurant))
            .catch((error) => res.status(500).send(error));
    }
};

module.exports = dbController;