import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";

const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };


    return (
        <div className="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <h1>Hello user</h1>
                    <div class="card border shadow">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> NAME:   {user.name}</li>
                            <li class="list-group-item">USER NAME:  {user.username}</li>
                            <li class="list-group-item"> EMAIL: {user.email} </li>
                            <li class="list-group-item"> PHONE: {user.phone} </li>
                            <li class="list-group-item"> WEBSITE: {user.website} </li>
                        </ul>
                        <Link className="btn btn-primary mr-2" to="/" >Back To Home</Link>
                    </div>
                   
                    </div>
                <div class="col-2"></div>
            </div>

        </div>
    )
}

export default View;