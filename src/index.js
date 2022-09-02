import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Routing from './routing/Route';

const App = () => {


    return (
        <Routing/>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))