const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8080

app.get("/ping", (req, res) => {
    res.send("Pong");
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})