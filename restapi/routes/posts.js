const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

// get all the post
router.get("/",async(req,res)=>
{
    try{
        // find()-> 
        const posts = await Post.find();
        res.json(posts);

    }catch (err) {
        res.json({message: err});
    }
});

router.get("/specific", (req,res) => {
res.send("inside the specific post");
});
//save a post
router.post("/",async(req ,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try{
    const savedPost =    await post.save();
    res.json(savedPost);

    }catch(err){
        res.json({message: err});

    }


});
//get aspecifc post
router.get("/:postId",async(req,res)=>{
    try{
        // find()-> 
        const post = await Post.findById(req.params.postId);
        res.json(post);

    }catch (err) {
        res.json({message: err});
    }
   
});
// update the specific post
router.patch("/:postId",async(req,res)=>{
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set:{
                title: req.body.title,
        description: req.body.description,
            },
        }

        );
        res.json(updatedPost);

    }catch(err){
        res.json({message : err});

    }
});
module.exports = router;