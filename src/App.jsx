
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Create from './Pages/Create.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css' ;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
