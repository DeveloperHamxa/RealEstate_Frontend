import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import LoginPage from '../pages/login/Login'
import Property from '../pages/property/Property'
import Allproperty from '../pages/allproperty/Allproperty'

import SignUpPage from '../pages/signup/Signup'
import Home from '../pages/home/Home'



export default function Routing() {
    return (
        <Router>
            <div className="">
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/signup" element={<SignUpPage />}></Route>
                    <Route path="/addproperty" element={<Property />}></Route>
                    <Route path="/allproperty" element={<Allproperty />}></Route>
                    <Route path="/" element={<Home />}> </Route>
                </Routes>
            </div>
        </Router>
    )
}
