import React from 'react';

const Post = ({ title, content, author, createdAt }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="post-info">
        <p>Author: {author}</p>
        <p>Posted on: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Post;
