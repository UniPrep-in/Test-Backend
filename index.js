const express = require("express");
require("dotenv").config();
require("./models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 8080

app.get("/ping", (req, res) => {
    res.send("Pong");
})

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", auth);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})