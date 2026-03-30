
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../App.css' ;
function Home() {
  

  return (
    <>
      <Header />
      <div className="content">
        <h2>Welcome to PShanBlog!</h2>
        <p>Your go-to platform for sharing your thoughts, ideas, and stories with the world. Whether you're a seasoned blogger or just starting out, PShanBlog provides a user-friendly interface to create and publish your content effortlessly.</p>
        <p>Begin your story by clicking the "Create Post" button above.</p>
        <p>See other posts in the "Blog" section.</p>
      </div>
      <Footer />
    </>
  )
}

export default Home;
