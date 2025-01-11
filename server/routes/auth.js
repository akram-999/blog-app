const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
    });

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json("Wrong credentials!");
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(400).json("Wrong credentials!");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;