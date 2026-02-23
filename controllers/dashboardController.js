const DashboardModel = require("../models/Dashboard");

const getDashboardByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const dashboard = await DashboardModel.findOne({ email });

        if (!dashboard) {
            return res.status(404).json({
                message: "Dashboard not found",
                success: false
            });
        }

        res.status(200).json({
            message: "Dashboard fetched successfully",
            success: true,
            data: dashboard
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message
        });
    }
};

const updateDashboardByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const updateData = req.body;

        // Prevent updating email to maintain link integrity
        delete updateData.email;

        const updatedDashboard = await DashboardModel.findOneAndUpdate(
            { email },
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedDashboard) {
            return res.status(404).json({
                message: "Dashboard not found",
                success: false
            });
        }

        res.status(200).json({
            message: "Dashboard updated successfully",
            success: true,
            data: updatedDashboard
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message
        });
    }
};

module.exports = {
    getDashboardByEmail,
    updateDashboardByEmail
};
