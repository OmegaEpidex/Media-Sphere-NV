const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Route: /api/posts
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);

// Route: /api/posts/:postId
router.get('/:postId', postController.getPostById);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router;
