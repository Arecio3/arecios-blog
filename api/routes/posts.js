const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create New Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your account");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only delete your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all post 
router.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.category;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (category) {
            // look at categories array in Post model and see if the category selected is there
            posts = await Post.find({
                categories: {
                    $in: [category],
                },
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
