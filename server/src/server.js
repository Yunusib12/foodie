require("dotenv").config();

// import modules
const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

// global variables 
const schema = require("./schema/");
const routes = require("./routes");
const mongoDBUrl = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// initialize express 
const app = express();

// allow cross-origin request 
app.use(cors());

// body Parsing & url encoded
app.use(express.json({ extended: false }));
app.use(express.urlencoded({
    extended: true
}));

// API Routes 
app.use(routes);

// initialize GraphQl and start the server
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

// connect to our MongoDB database 
mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)))
    .catch((error) => console.log(error));
