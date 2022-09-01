import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import SignUpPage from './pages/SignUp/SignUp';
import LoginPage from './pages/login/Login';
import Property from './pages/property/Property';
import Home from './pages/home/Home';




const App = () => {


    return (
        <Router>
            <div className="">
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/signup">
                        <SignUpPage />
                    </Route>
                    <Route path="/addproperty">
                        <Property />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Property />
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))