const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    drive: {
        type: String,
        default: ""
    },
    pastExamsAnalysis: {
        type: Object,
        default: {}
    },
    streakCounter: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const DashboardModel = mongoose.model("Dashboard", DashboardSchema);
module.exports = DashboardModel;
