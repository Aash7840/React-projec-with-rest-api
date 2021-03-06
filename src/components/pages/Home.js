import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () =>
{     
    
    const [users, setUsers]=useState([]);

    useEffect(() =>{
    loadUsers();    
    }, [])


    const loadUsers = async () =>
    {
        const result =await axios.get(`http://localhost:3003/users`);
        setUsers(result.data);
        console.log(result.data);
    };

    const deleteUser=async (id)=>
    {
                await axios.delete(`http://localhost:3003/users/${id}`)
                loadUsers();
    }


    return(
     <div className="container">
         <div className="py-4">
        <h1>Home page</h1>
        <table class="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {

                    users.map((user, index)  => (
                        <tr>
                            <th scope="row">{index +1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/user/view/${user.id}`} >View</Link>
                                <Link className="btn btn-outline-primary mr-2"  to={`/user/edit/${user.id}`}>Edit</Link>
                                <Link className="btn btn-danger mr-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
                            </td>
                        </tr>    

                    ))

   } 


  </tbody>
</table>
       
        </div>
    </div>)
}

export default Home;