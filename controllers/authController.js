const bcrypt = require("bcrypt")
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async(req, res) => {
    try{
        const { name, email, password, phoneNumber } = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message : "User already exists, you can login", success : false});
        }
        const userModel = new UserModel({ name, email, password, phoneNumber });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message : "Signup Successful", 
                success : true
            })
    }catch(err){
        res.status(500)
        .json({
            message : "Internal Server Error",
            success : false
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, phoneNumber, password } = req.body;

        if ((!email && !phoneNumber) || !password) {
            return res.status(400).json({
                message: "Email or phone number and password are required",
                success: false
            });
        }

        const user = await UserModel.findOne({
            $or: [
                { email: email },
                { phoneNumber: phoneNumber }
            ]
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }
        const jwtToken = jwt.sign(
            {email : user.email, _id : user._id},
            process.env.JWT_SECRET,
            {expiresIn : "24h"}
        )

        return res.status(200).json({
            message: "Login Successful",
            success: true,
            token: jwtToken,
            user: {
                id: user._id,
                email: user.email,
                phoneNumber: user.phoneNumber,
                name: user.name
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login
}