import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './css/BlogForm.css';

function BlogForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/posts/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setContent(response.data.content);
          setExcerpt(response.data.excerpt);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, content, excerpt };
    const request = id
      ? axios.put(`http://localhost:5000/posts/${id}`, post)
      : axios.post('http://localhost:5000/posts', post);

    request.then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <div className="blog-form">
      <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Excerpt:</label>
        <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">{id ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
}

export default BlogForm;
