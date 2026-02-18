const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        trim: true
    },
    userId: {
        type: String,
        unique: true
    },
    profilePicture: {
        type: String
    }
}, { timestamps: true });

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;