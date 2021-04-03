require("dotenv").config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    APP_PORT: process.env.APP_PORT,
    SERVER_URL: process.env.SERVER_URL,
    API_VERSION: process.env.API_VERSION
}