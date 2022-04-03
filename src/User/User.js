import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = (props) => {
    const {username,id}=props.user;

    const navigate = useNavigate();
    const showDetails =()=>{
        navigate('/users/'+id)
    }
    return (
        <div className='user-card'>
            <h3>Username: {username}</h3>
            <p>User Id: {id}</p>
            <button onClick={()=>showDetails(id)}>Details</button> <br />
            <Link to={'/users/'+id}>Show Details</Link>
        </div>
    );
};

export default User;

