import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function User() {

    const {id} = useParams();
    const [user, setUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""
    });



    useEffect(() => {
        loadUser();
    }, [])


    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result)
        setUser(res.data)
    }

    
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                Back to Home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                <li className="list-group-item"><strong>User Name:</strong> {user.username}</li>
                <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
                <li className="list-group-item"><strong>Website:</strong> {user.website}</li>
            </ul>
        </div>
    )
}

export default User
