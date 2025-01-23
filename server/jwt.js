const jwt = require("jsonwebtoken");
const Post = require("./models/Post");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json("You are not authenticated!");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) {
            return res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next();
    });
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!req.user) {
            return res.status(403).json("Authentication failed!");
        }
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verifyTokenAndPostAuthorization = (req, res, next) => {
    verifyToken(req, res, async () => {
        try {
            if (!req.user) {
                return res.status(403).json("Authentication failed!");
            }
            
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).json("Post not found!");
            }

            // Check if the logged-in user is the post owner or an admin
            if (post.email === req.user.email || req.user.isAdmin) {
                req.post = post; // Store post for later use if needed
                next();
            } else {
                res.status(403).json("You can only modify your own posts!");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
    verifyTokenAndPostAuthorization,
};
