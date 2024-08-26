// src/pages/CreatePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreatePost.css'; // We'll create this CSS file for styling

function CreatePost() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { title, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5001/api/posts', formData, {
        headers: {
          'x-auth-token': token,
        },
      });
      navigate('/'); // Redirect to home after successful post creation
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="container create-post">
      <h2>Create a New Post</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
