# Knowledge Sharing Platform

![logo](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6b160ba6-cd3a-42c2-9787-c09294d73a69" />
)

## Description
A modern, responsive Knowledge Sharing Platform where students can post articles, share knowledge, and engage in discussions through comments. Built using the MERN stack (MongoDB, Express.js, React, Node.js) with Firebase authentication, this platform enables seamless content creation and interaction with an intuitive UI.

**Live Demo:** [https://your-live-project-link.com](https://your-live-project-link.com)

---

## Technologies Used
- **Frontend:** React, React Router, Tailwind CSS, DaisyUI, Framer Motion, Firebase
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Others:** Axios, bcryptjs, dotenv, CORS

---

## Core Features

- **Navigation Bar**
  - Links: Home, All Articles, My Articles (private), Post Article (private), About Us
  - Conditional display based on authentication status (Login button or user profile dropdown)

- **Homepage**
  - Hero banner with call-to-action button
  - Featured articles and categories section
  - Additional sections such as Top Contributors

- **Authentication**
  - Email/password and Google social login
  - Registration with validation and toast notifications

- **Articles**
  - Browse all articles with cards displaying title, author, and date
  - Article details with full content, tags, comments, and likes
  - Authenticated users can post, update, or delete their own articles

- **Comments & Likes**
  - Users can comment and like articles
  - Display of comment counts and like counts

- **Private User Pages**
  - My Articles page with editable and deletable articles

- **Additional Pages**
  - Custom 404 page with navigation back to home
  - Static footer with social links and copyright

- **Advanced Features**
  - JWT authentication securing private routes
  - Theme toggle (light/dark mode)
  - Server-side filtering of articles by categories or tags

---

## Dependencies

### Frontend
```bash
npm install react react-dom react-router-dom tailwindcss daisyui framer-motion firebase axios
