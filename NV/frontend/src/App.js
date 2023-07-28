import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios using 'npm install axios'

const App = () => {
  // State to store posts and other data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Replace with the actual API endpoint to fetch posts
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to SocialXchange</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <span>Author: {post.author}</span>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;


////

Certainly! Below is a basic example of an App.js file for the frontend of your social media platform using React.js:

jsx
Copy code
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios using 'npm install axios'

const App = () => {
  // State to store posts and other data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Replace with the actual API endpoint to fetch posts
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to SocialXchange</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <span>Author: {post.author}</span>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;