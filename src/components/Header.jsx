import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const handleButtonClickBlog = () => {
        navigate('/blog');
    };
    const handleButtonClickCreate = () => {
        navigate('/create');
    };
    const handleButtonClickHome = () => {
        navigate('/');
    }
    return (
        
        <>
            <div className="header">
                <h1>PShanBlog</h1>
                <ul>
                    <li><button onClick={handleButtonClickHome} >Home</button></li>
                    <li><button onClick={handleButtonClickBlog}>Blog</button></li>
                    <li><button onClick={handleButtonClickCreate}>Create</button></li>
                </ul>
            </div>
        </>
    )
}

export default Header;
