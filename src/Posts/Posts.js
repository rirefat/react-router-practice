import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setPosts(data))
    },[]);
    return (
        <div className='post-container'>
            <h1>Available Posts: {posts.length}</h1>
            <Outlet></Outlet>
            {
                posts.map(post=><Link to={'/posts/'+post.id}>{post.id}</Link>)
            }
        </div>
    );
};

export default Posts;