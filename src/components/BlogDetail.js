import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/posts/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    post ? (
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    ) : <p>Loading...</p>
  );
}

export default BlogDetail;
