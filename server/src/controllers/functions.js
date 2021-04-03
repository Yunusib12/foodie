const axios = require("axios");
const restaurants = require("../__mocks__/restaurants");
const db = require("../models");


const functions = {

    getLocalData: (query) => {

        return restaurants.filter((restaurant) => {

            // Constructiing the query that will help with the search in the array
            const businessName = restaurant.BusinessName?.toLowerCase().includes(query.toLowerCase());
            const licStatus = restaurant.LICSTATUS?.toLowerCase().includes(query.toLowerCase());
            const licenceCat = restaurant.LICENSECAT?.toLowerCase().includes(query.toLowerCase());
            const licenceAddDateTime = restaurant?.LicenseAddDtTm.toLowerCase().includes(query.toLowerCase());
            const description = restaurant.DESCRIPT?.toLowerCase().includes(query.toLowerCase());
            const dayPhone = restaurant.dayphn?.toLowerCase().includes(query.toLowerCase());
            const propertyID = restaurant.Property_ID?.toLowerCase().includes(query.toLowerCase());
            const address = restaurant.Address?.toLowerCase().includes(query.toLowerCase());
            const city = restaurant.CITY?.toLowerCase().includes(query.toLowerCase());
            const state = restaurant.State?.toLowerCase().includes(query.toLowerCase());
            const zipCode = restaurant.ZIP?.toLowerCase().includes(query.toLowerCase());
            const latitude = restaurant.Latitude?.toLowerCase().includes(query.toLowerCase());
            const longitude = restaurant.Longitude?.toLowerCase().includes(query.toLowerCase());

            return (businessName || licStatus || licenceCat || licenceAddDateTime || description || dayPhone || propertyID || address || city || state || zipCode || latitude || longitude);
        });
    },
    addRestToUserAndUserToRest: (savedRestaurantId, userDBId, res) => {
        // update Restaurant information into User list of restaurants

        return db.User
            .findOneAndUpdate(
                { _id: userDBId },
                { $push: { restaurants: savedRestaurantId } },
                { new: true, useFindAndModify: false })
            .then((userUpdated) => {

                //update the restaurant with the user information
                return db.Restaurant
                    .findOneAndUpdate(
                        { _id: savedRestaurantId },
                        { $push: { users: userDBId } },
                        { new: true, useFindAndModify: false }
                    )
                    .then((restaurantUpdated) => res.send({ restaurantUpdated, userUpdated }))
                    .catch((error) => res.status(500).send(error));
            })
            .catch((error) => res.status(500).send(error));
    },
    addRestToUserAndUserToRestGQL: (savedRestaurantId, userDBId) => {

        // update Restaurant information into User list of restaurants

        return db.User
            .findOneAndUpdate(
                { _id: userDBId },
                { $push: { restaurants: savedRestaurantId } },
                { new: true, useFindAndModify: false })
            .then((userUpdated) => {

                //update the restaurant with the user information
                return db.Restaurant
                    .findOneAndUpdate(
                        { _id: savedRestaurantId },
                        { $push: { users: userDBId } },
                        { new: true, useFindAndModify: false }
                    )
                    .then((restaurantUpdated) => restaurantUpdated)
                    .catch((error) => error);
            })
            .catch((error) => error);
    },
    getRestaurantData: (baseUrl, query, limit) => {

        return axios
            .get(`${baseUrl}`)
            .then((response) => {

                // sending back the results from the live API 
                const restaurantData = response.data.result.records;
                const totalResults = restaurantData.length;
                const restaurants = restaurantData.slice(0, limit);

                return { restaurants, totalResults };

            }).catch((error) => {

                // Incase of an error or the live API is not abvailable send back the data from the local file
                const restaurantData = [];

                restaurantData.push(functions.getLocalData(query));

                const totalResults = restaurantData[0].length;
                const restaurants = restaurantData[0].slice(0, limit);

                return { error, restaurants, totalResults };
            });
    }
};

module.exports = functions;