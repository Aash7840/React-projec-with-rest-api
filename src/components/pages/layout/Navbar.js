import React, { Fragment } from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <div>
         
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">React Project</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">Contact </NavLink>
              </li>
              
            </ul>
          </div>
          <Link className="btn btn-outline-light" to="/user/add" >Add User</Link>
        </div></div>
      </nav></div>
    )
}

export default Navbar;