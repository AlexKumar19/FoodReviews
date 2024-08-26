# Caltech Food Blog

## Overview

The **Caltech Food Blog** is a web application designed to allow users to explore and share their favorite food spots at Caltech. Users can browse posts about various dishes, create their own posts, and interact with the community. The app features a simple "Read More" functionality for posts, enabling users to quickly skim through content or dive deeper into specific posts.

## Purpose

This project was developed to help students and visitors at Caltech find the best food options available on campus and in the surrounding area. It also serves as a platform for food enthusiasts to share their experiences and recommendations. Whether you're a new student trying to find the best burrito or a seasoned foodie looking to share your latest culinary discovery, this blog has something for you.

## Tech Stack

The application is built with the following technologies:

- **Frontend**: 
  - **React.js**: A JavaScript library for building user interfaces.
  - **CSS**: For styling the components and layout.
- **Backend**:
  - **Express.js**: A web application framework for Node.js.
  - **Node.js**: JavaScript runtime environment for executing JavaScript code server-side.
  - **MongoDB**: A NoSQL database for storing user posts and authentication data.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Authentication**:
  - **JWT (JSON Web Token)**: For secure user authentication and session management.
  - **Bcrypt.js**: For hashing and securing passwords.
- **Deployment**:
  - **Heroku** or **Vercel**: For deploying the frontend and backend.
  - **MongoDB Atlas**: A cloud database service for hosting MongoDB.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Create Posts**: Users can create posts with titles, descriptions, and images.
- **Read More**: A "Read More" functionality allows users to expand posts to read the full content.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **MongoDB**: You can use a local installation or MongoDB Atlas for a cloud-based database.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/caltech-food-blog.git
   cd caltech-food-blog
