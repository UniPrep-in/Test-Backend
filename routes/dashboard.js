const router = require("express").Router();
const { getDashboardByEmail, updateDashboardByEmail } = require("../controllers/dashboardController");
const ensureAuthenticated = require("../middlewares/auth");

// GET /api/dashboard/:email
router.get("/:email", ensureAuthenticated, getDashboardByEmail);

// PUT /api/dashboard/:email
router.put("/:email", ensureAuthenticated, updateDashboardByEmail);

module.exports = router;