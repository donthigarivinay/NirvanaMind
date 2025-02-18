import React from 'react';
import './Post.css';

const Post = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
    </div>
  );
};

export default Post;