// import the module 
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// create the UserSchema
const RestaurantSchema = new Schema({
    restaurantId: { type: String, required: true, unique: true },
    businessName: { type: String },
    dbaName: { type: String },
    licStatus: { type: String },
    licenceCat: { type: String },
    licenceAddDateTime: { type: String },
    description: { type: String },
    dayPhone: { type: String },
    propertyID: { type: String, unique: true },
    address: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    latitude: { type: String },
    longitude: { type: String },
    // likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    savedAt: { type: Date, default: Date.now }
});

module.exports = model("Restaurant", RestaurantSchema);