import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../../auth'
import { useHistory } from 'react-router-dom'
import './Login.css'
import loginpic from './login.png';
import Header from '../../components/header/Header'



const LoginPage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const history = useHistory()



    const loginUser = (data) => {

        // const body = {
        //     email: data.email,
        //     password: data.password
        // }
        // console.log(body)
        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data.token)

                if (data) {
                    login(data.token)

                }
                else {
                    alert('Invalid username or password')
                }


            })


    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="form">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>Sign in</h1>
                            <form >
                                <Form.Group className='a'>
                                    <Form.Label className='inputfield'>Email</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Your email"
                                        className='a'
                                        {...register('email', { required: true, maxLength: 25 })}
                                    />
                                </Form.Group>
                                {errors.email && <p style={{ color: 'red' }}><small>Email is required</small></p>}
                                {errors.email?.type === "maxLength" && <p style={{ color: 'red' }}><small>Email should be 25 characters</small></p>}
                                <br></br>

                                <Form.Group>
                                    <Form.Label className='inputfield'>Password</Form.Label>
                                    <Form.Control type="password"
                                        placeholder="Your password"
                                        className='a'
                                        {...register('password', { required: true, minLength: 8 })}
                                    />
                                </Form.Group>
                                {errors.email && <p style={{ color: 'red' }}><small>Password is required</small></p>}
                                {errors.password?.type === "maxLength" && <p style={{ color: 'red' }}>
                                    <small>Password should be more than 8 characters</small>
                                </p>}
                                <br></br>
                                <Form.Group>
                                    <Button as="sub" variant="primary" className='btn btn-lg' onClick={handleSubmit(loginUser)}>Login</Button>
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                                </Form.Group>

                            </form>
                        </div>
                        <div className='col-lg-6'>
                            <img src={loginpic} width="550" height="400" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage