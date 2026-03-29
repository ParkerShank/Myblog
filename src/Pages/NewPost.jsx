import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../App.css';

function NewPost({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setContent('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !content.trim()) {
      setError('All fields are required: title, author, and content.');
      return;
    }

    onAdd({ title: title.trim(), author: author.trim(), content: content.trim() });
    resetForm();
  };

  return (
    <>
      <Header />
        <div className='spacer'></div>
        <h2 style={{textAlign:'center'}}>Create New Post</h2>
        <div className="content">
            
            <form onSubmit={handleSubmit} className="new-post-form">
            {error && <p className="error-message">{error}</p>}

            <label>
                Title
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your post title" />
            </label>

            <label>
                Author
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your name" />
            </label>

            <label>
                Content
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post content" rows={8} />
            </label>

            <button className="button" type="submit">Publish Post</button>
            </form>
        </div>
        <Footer />
    </>
  );
}

export default NewPost;
