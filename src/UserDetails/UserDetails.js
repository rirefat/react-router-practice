import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const param = useParams();
    const {user_id}=param;

    const [details, setDetails] = useState([]);
    useEffect(()=>{        
        fetch(`https://fakestoreapi.com/users/${user_id}`)
            .then(res=>res.json())
            .then(data=>setDetails(data))
    },[]);
    
    const {id,name,username,address,email,phone}=details;
    return (
        <div>
            <h1 className='userDetails-page-title'>User Details</h1>
            <div className='single-user-container'>
                <div className="details-container">
                    <h3>Name: {name?.firstname} {name?.lastname}</h3>
                    <p><strong>Username: </strong>{username}</p>
                    <p><strong>Id: </strong>{id}</p>
                    <p><strong>Email: </strong>{email}</p>
                    <p><strong>Phone: </strong>{phone}</p>
                    <p><strong>Address: </strong>{address?.city}</p>
                </div>
                <div className="user-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIZQi5tuGpEO0i8Zr6IOd0R7Ss1Foq97qHSXUNLNZOy9i4J3TyRkTozia66wzULFEQ7M&usqp=CAU" alt="user avatar" title='user avatar' />
                </div>
            </div>
        </div>        
    );
};

export default UserDetails;