import React from "react";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav id= "navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">

                            <button className="btn">
                                <Link to= "/" className="btn-color"> Home</Link>
                              </button>
                        </li>
                        <li class="nav-item">
                            <button className="btn">
                            <Link to= "/Admin" className="btn-color">Admin</Link>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button className="btn">
                            <Link to= "/Signin" className="btn-color">User Sign-In</Link>
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
  }

export default Navbar
