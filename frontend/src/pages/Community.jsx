import React, { useState } from 'react';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div className="community">
      <h1>Community Support</h1>
      <div className="post-form">
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;