import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";

const AddUser = () => {
  let history = useHistory();
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
  
  const onSubmit = async e =>
  {
              e.preventDefault();
              await axios.post("http://localhost:3003/users",user);
              history.push("/")

  };

  return (
    <div className="container">
      <h1>Hello bro..Add user Here</h1>
    
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
          </div>
         
          <div class="col-sm">
         
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
              
                <button class="btn btn-success" type="button" style={{ justifyContent: 'center', alignItems: 'center', width: '100vh' }} onClick={ e => onSubmit(e) } >Add User</button>
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
export default AddUser;