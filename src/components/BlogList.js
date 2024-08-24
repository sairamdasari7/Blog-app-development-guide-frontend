import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/BlogList.css';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
      <Link to="/create" className="create-post-button">Create New Post</Link>
    </div>
  );
}

export default BlogList;
