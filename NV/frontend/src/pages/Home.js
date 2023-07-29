import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

const Home = () => {
  // Replace the following with logic to fetch and display posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend or an API and update the 'posts' state
    // Example: fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="home-page">
      {posts.map((post) => (
        <Post
          key={post._id}    // Replace with a unique identifier for each post
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
        />
      ))}
      {/* Add a post creation form or other home page content here */}
    </div>
  );
};

export default Home;
