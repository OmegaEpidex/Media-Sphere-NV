const Post = require('../models/Post'); // Assuming you have a Post model defined

// Controller to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', '-password'); // Populate the 'author' field and exclude password
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to get a single post by ID
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author', '-password');

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Assuming you have the user's ID available in the request (e.g., through authentication)
    const author = req.user._id;

    const newPost = new Post({ title, content, author });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to update a post by ID
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    ).populate('author', '-password');

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to delete a post by ID
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId).populate('author', '-password');

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(deletedPost);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
