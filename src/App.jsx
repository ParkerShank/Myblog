
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import NewPost from './Pages/NewPost.jsx';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to PShanBlog',
      author: 'Admin',
      content: 'This blog is now live. Create your first post by visiting New Post page.',
      timestamp: new Date().toLocaleString(),
    },
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [{ ...post, id: Date.now(), timestamp: new Date().toLocaleString() }, ...prevPosts]);
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog posts={posts} onDelete={deletePost} />} />
        <Route path="/new-post" element={<NewPost onAdd={addPost} />} />
        <Route path="*" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
