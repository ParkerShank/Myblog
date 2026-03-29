
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../App.css';

function Blog({ posts = [], onDelete }) {
  return (
    <>
      <Header />
      <div className='spacer'></div>
      <h2 style={{textAlign: 'center'}}>Blog Posts</h2>
      <div className="content">
        
        {posts.length === 0 ? (
          <p>No posts yet. Create the first post in the New Post page.</p>
        ) : (
          posts.map((post) => (
            <article className="post-card" key={post.id}>
              <h3>{post.title}</h3>
              <p className="meta">By {post.author} on {post.timestamp}</p>
              <p>{post.content}</p>
              <button className="buttonDel" onClick={() => onDelete(post.id)}>Delete</button>
            </article>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
