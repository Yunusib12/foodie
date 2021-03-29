// initialize express router for the API Routes
const routes = require("express").Router();

// import API Routes
const apiRoute = require("./apiRoute");

routes.use("/api", apiRoute);

// default routes
routes.get("/", (req, res) => {
    res.send({
        message: "Thank you for testing out our API , this endpoint has no data!"
    })
})


module.exports = routes;