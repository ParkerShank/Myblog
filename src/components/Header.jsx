import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>PShanBlog</h1>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/blog" className="nav-link">Blog</Link></li>
        <li><Link to="/new-post" className="nav-link">New Post</Link></li>
      </ul>
    </div>
  );
}


export default Header;
