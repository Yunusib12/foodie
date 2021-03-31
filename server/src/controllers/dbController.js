// import necessary module 
const axios = require("axios");
const functions = require("./functions");

// import Schema 
const db = require("../models");

const dbController = {
    addUser: (req, res) => {

        const userInfo = req.body;

        //add the user information in the db
        db.User
            .create(userInfo)
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    users: (req, res) => {

        // retrieve all the the users available in the database
        db.User
            .find({})
            .populate("restaurants")
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    user: (req, res) => {

        const userId = req.params.id;

        // get a specific user information 
        db.User
            .find({ userId: userId })
            .populate("restaurants")
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    updateUser: (req, res) => {

        const userInfo = req.body;

        // update the user information in the db
        db.User
            .updateOne({ userId: userInfo.userId }, userInfo)
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    deleteUser: (req, res) => {

        const userId = req.params.id;

        // delete a specific user information 
        db.User
            .deleteOne({ userId: userId })
            .then((dbUser) => res.send(dbUser))
            .catch((error) => res.status(500).send(error));
    },
    addRestaurant: (req, res) => {

        // retrieve the userId 
        const restaurantId = req.body.restaurantId;
        const restaurants = req.body;

        delete restaurants.userId;

        // Check if the restaurant is already saved
        db.Restaurant
            .findOne({ restaurantId: restaurantId })
            .then((restaurantFound) => {

                if (!restaurantFound) {
                    // add the restaurant information in the database
                    db.Restaurant
                        .create(restaurants)
                        .then((restaurantSaved) => res.send(restaurantSaved))
                        .catch((error) => res.status(500).send(error));
                }
            })
            .catch((error) => res.status(500).send(error));
    },
    restaurants: (req, res) => {

        // retrieve all Saved restaurant by user in the database
        db.Restaurant
            .find({})
            // .populate("users")
            .then((dbRestaurants) => res.send(dbRestaurants))
            .catch((error) => res.status(500).send(error));
    },
    restaurant: (req, res) => {

        const restaurantId = req.params.id;

        // retrieve information on a saved restaurant
        db.Restaurant
            .find({ restaurantId: restaurantId })
            // .populate("users")
            .then((dbRestaurant) => res.send(dbRestaurant))
            .catch((error) => res.status(500).send(error));
    },
    deletetRestaurant: (req, res) => {

        const restaurantId = req.params.id;

        // delete a saved restaurant
        db.Restaurant
            .deleteOne({ restaurantId: restaurantId })
            .then((dbRestaurant) => res.send(dbRestaurant))
            .catch((error) => res.status(500).send(error));
    },
    restaurantData: (req, res) => {

        let limit = req.query.limit;
        let query = req.query.q;


        (limit == 0 || limit == "" || limit == undefined) && (limit = 10);
        (query == undefined) && (query = "");


        const baseUrl = `https://data.boston.gov/api/3/action/datastore_search?resource_id=f1e13724-284d-478c-b8bc-ef042aa5b70b&q=${query}`;

        console.log(baseUrl);

        axios
            .get(`${baseUrl}`)
            .then((response) => {

                // sending back the results from the live API 
                const restaurantData = response.data.result.records;
                const totalResults = restaurantData.length;
                const restaurants = restaurantData.slice(0, limit);

                res.send({ restaurants, totalResults });

            }).catch((error) => {

                // Incase of an error or the live API is not abvailable send back the data from the local file
                const restaurantData = [];

                restaurantData.push(functions.getLocalData(query));

                const totalResults = restaurantData[0].length;
                const restaurants = restaurantData[0].slice(0, limit);

                res.status(500).send({ error, restaurants, totalResults });
            });
    }
};

module.exports = dbController;