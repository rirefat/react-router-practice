import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Check Out Our Active Users.</h1>
            <div className="user-container">
            {
                users.map(user=><User user={user} key={user.id}></User>)
            }
            </div>
        </div>
    );
};

export default Users;