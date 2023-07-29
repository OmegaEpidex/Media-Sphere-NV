import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with the base URL of your backend server

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Example function to fetch all posts from the backend
export const fetchPosts = async () => {
  try {
    const response = await api.get('/api/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Example function to create a new post
export const createPost = async (postData) => {
  try {
    const response = await api.post('/api/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Add more functions to interact with other backend routes as needed

export default api;
