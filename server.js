const express = require("express");
const mongoose = require("mongoose");

require("./models");

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

// require("./routes/api.js")(app);
// require("./routes/html.js")(app);

app
    .use(require("./routes/html.js"))
    .use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });