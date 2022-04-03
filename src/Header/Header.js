import React from 'react';
import CustomLink from '../Utilities/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/products'>Products</CustomLink>
                <CustomLink to='/users'>Users</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;