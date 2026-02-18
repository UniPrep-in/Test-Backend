const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Mongo Connected...");
    }).catch((err) => {
        console.log("Mongo Error...", err);
    })