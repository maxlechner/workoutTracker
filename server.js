const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// process dynamic data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static file directory
app.use(express.static("public"));

// connection to mongoose for local development
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app
    .use(require("./routes/html.js"))
    .use(require("./routes/api.js"));