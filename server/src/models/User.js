// import the module 
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// create the UserSchema
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    likedRestaurant: [
        {
            type: Number,
            ref: "Restaurant"
        }
    ]
});

module.exports = model("User", UserSchema);

