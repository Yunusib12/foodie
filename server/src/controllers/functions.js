const restaurants = require("../__mocks__/restaurants");

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
    }
};

module.exports = functions;