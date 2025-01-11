const router = require("express").Router();
const Post = require("../models/Post");
const { verifyToken, verifyTokenAndPostAuthorization } = require("../jwt");

router.post("/", verifyToken ,async (req, res) => {
    
    try {
        if (!req.user) {
            return res.status(403).json("You must be logged in to create a post!");
        }
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    const queryname = req.query.username;
    const querycategory = req.query.category;
    try {
        let posts;  
        if(queryname){
            posts = await Post.find({username: queryname});
        }else if(querycategory){
            posts = await Post.find({categories: {
                $in: [querycategory]
            }});
        }else{
            posts = await Post.find()
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", verifyTokenAndPostAuthorization, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", verifyTokenAndPostAuthorization, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;