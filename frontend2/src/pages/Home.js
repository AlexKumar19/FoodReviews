// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Caltech Food Blog</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/create-post">Create Post</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
      <div className="feed">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={`/posts/${post._id}`} className="read-more">Read more</a>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
      <footer>
        <p>&copy; 2024 Caltech Food Blog</p>
      </footer>
    </div>
  );
}

export default Home;
