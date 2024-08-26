const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { ensureAuth } = require('../middleware/auth');
const router = express.Router();

// Add a comment to a post
router.post('/:postId', ensureAuth, async (req, res) => {
  const { text } = req.body;
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    const newComment = new Comment({
      text,
      author: req.user.id,
      post: req.params.postId
    });

    const comment = await newComment.save();

    post.comments.push(comment.id);
    await post.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
