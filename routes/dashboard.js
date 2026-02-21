const router = require("express").Router();
const ensureAuthenticated = require("../middlewares/auth");

router.get("/", ensureAuthenticated, (req, res) => {
    res.status(200).json({

    })
})