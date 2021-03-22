import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import axios from "axios";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });
    const { name, username, email, phone, website } = user;


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };


    useEffect(() => {
        loadUser();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/")

    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
        
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                    </div>

                    <div class="col-sm">
                    <h1> Edit User</h1>

                        <div class="card-body border shadow">
                            <div class="mb-20">
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                    name="name" value={name} onChange={(e) => onInputChange(e)} />
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Username"
                                    name="username" value={username} onChange={(e) => onInputChange(e)} />
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your E-mail Address"
                                    name="email" value={email} onChange={(e) => onInputChange(e)} />
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone Number"
                                    name="phone" value={phone} onChange={(e) => onInputChange(e)} />
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Website Name"
                                    name="website" value={website} onChange={(e) => onInputChange(e)} />
                                <br />

                                <button class="btn btn-warning" type="button" style={{ justifyContent: 'center', alignItems: 'center', width: '100vh' }} onClick={e => onSubmit(e)} >Update User</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
            </div>




        </div>
    )
}
export default EditUser;