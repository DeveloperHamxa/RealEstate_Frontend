import React,{useState} from 'react'
import './Header.css'
import logo from './logo.png';



export default function Header() {
    return (
        <div className='container-fluid header'>
            <nav className="navbar navbar-light navbar-expand-lg  header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/addproperty">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">About</a>
                        </li>

                    </ul>
                </div>
                <ul class="nav nav-justified">
                    <li>
                        <a className="navbar-brand" href="/"><img src={logo} style={{ width: 155, height: 130 }}></img></a>
                    </li></ul>
                <div className="collapse navbar-collapse " id="navbarNav">

                    <ul className="navbar-nav navbar-right ms-auto">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary btn-md button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/login';
                            }}>Login</button>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    )
}
