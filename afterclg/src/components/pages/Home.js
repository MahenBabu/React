import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


function Home() {
    const [users, setUser] = useState([]);
    let history = useHistory();

    

    useEffect(() => {
        loadUsers();
    }, []);



    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        // console.log(result)
        setUser(result.data.reverse())
    }



    const deleteUser = async id => {
        //alert(id);

        if (window.confirm("Delete the user?")) { 
            //console.log("Deleted")
            await axios.delete(`http://localhost:3003/users/${id}`);
            loadUsers();
        }else{
            history.push("/");
        }
        

    }



    return (
        <div className="container py-4">
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(( user, index ) => (
                            <tr key = {index + 1 }>
                                <th scope="row">{ index + 1 }</th>
                                <td>{ user.name}</td>
                                <td>{ user.username}</td>
                                <td>{ user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <button className="btn btn-outline-danger" onClick = {() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                       ))
                   }
                </tbody>
            </table>
        </div>
    )
}

export default Home
