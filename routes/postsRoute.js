//imports
const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

//ROUTES
//gets all the posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//post submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete specifc post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedOnePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.params.title } }
    );
    res.json(updatedOnePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//exporting module- making available in other files
module.exports = router;
