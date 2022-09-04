import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'

export default function Header() {
    const navigate = useNavigate();

  

    return (
        <div className='container-fluid header'>
            <nav className="navbar navbar-light navbar-expand-lg  header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/addproperty")}>Add Property</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/allproperty")}>Property</a>
                        </li>
                    </ul>
                </div>
                <ul class="nav nav-justified">
                    <li>
                        <a className="navbar-brand" ><img  style={{ width: 80, height: 70 }} src={logo} onClick={()=>navigate("/")}></img></a>
                    </li></ul>
                <div className="collapse navbar-collapse " id="navbarNav">

                    <ul className="navbar-nav navbar-right ms-auto">
                        
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/signup")}>Signup</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary btn-md button" onClick={()=>navigate("/login")}>Login</button>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    )
}
