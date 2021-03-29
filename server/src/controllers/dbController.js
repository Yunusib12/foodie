// import necessary module 
const { ObjectId } = require("mongodb");

// import Schema 
const db = require("../models");

const dbController = {
    addUser: (req, res) => {

        const userInfo = req.body;

        //add the user information in the db
        db.User.create(userInfo, (err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    },
    getAllUser: (req, res) => {

        // retrieve all the the users available in the database
        db.User.find((err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    },
    getUser: (req, res) => {

        const userId = req.params.id;

        // get a specific user information 
        db.User.findOne({ userId: userId }, (err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    },
    saveUserLikedRestaurant: (req, res) => {

        // Checking the query param before proceding with the update and saving them in an array
        const keys = [];

        for (const key in req.query) {
            keys.push(key);
        }

        if (keys.includes("userId") && keys.includes("restaurantId")) {

            const { userId, restaurantId } = req.query;

            const update = {
                $push: {
                    likedRestaurant: restaurantId
                }
            };

            // add or update the user information on the restaurant that the user liked
            db.User.findOneAndUpdate({ userId: userId }, update, { new: true }, (err, data) => {
                if (err)
                    res.status(500).send(err)
                else
                    res.json(data);
            })

        } else {
            res.status(500).send({
                errorMessage: "The query params used are not allowed on this route"
            })
        }
    },
    addRestaurant: (req, res) => {

        const restaurantInfo = req.body;

        //add the restaurant information in the db
        db.Restaurant.create(restaurantInfo, (err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    },
    getAllSavedRestaurant: (req, res) => {

        // retrieve all Saved restaurant by user in the database
        db.Restaurant.find((err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    },
    getRestaurant: (req, res) => {

        const restaurantId = req.params.id;

        // retrieve all Saved restaurant by user in the database
        db.Restaurant.findOne({ restaurantId: restaurantId }, (err, data) => {
            if (err)
                res.status(500).send(err)
            else
                res.json(data);
        });
    }
};

module.exports = dbController;