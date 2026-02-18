const router = require("express").Router();
const {signupValidation} = require("../middlewares/authValidation");
const { signup } = require("../controllers/authController");

router.post("/login", (req, res) => {
    res.send("Login Success");
})

router.post("/signup", signupValidation, signup);

module.exports = router;