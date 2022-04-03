import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {
    const param =useParams();
    const {postID}=param;

    const [post,setPosts]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postID}`;
        fetch(url)
            .then(res=>res.json())
            .then(data=>setPosts(data))
    },[postID])

    const {id, title, body}=post;
    return (
        <div className='post'>
            <h1>Post Details</h1>
            <div className="post-body">
                <p><strong>Post Id: </strong>{id}</p>
                <p><strong>Post Title: </strong>{title}</p>
                <p><strong>Post Details: </strong>{body}</p>
            </div>
        </div>
    );
};

export default SinglePost;