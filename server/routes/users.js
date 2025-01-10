const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Post = require("../models/Post");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../jwt");

router.get("/users/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ 
            message: "Error updating user",
            error: error.message
        });
    }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        // Get the user first to get their email
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json("User not found");
        }

        // Delete all posts by this user
        await Post.deleteMany({ email: user.email });
       
        // Delete the user
        await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json("User and all their posts have been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;

