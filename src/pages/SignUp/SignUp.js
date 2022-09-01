import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import signuppic from './signup.png';
import Header from '../../components/header/Header';


const SignUpPage = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')

    const submitForm = (data) => {


        if (data.password === data.confirmPassword) {


            const body = {
                username: data.username,
                email: data.email,
                password: data.password,
                fname: data.fname,
                lname: data.lname,
                phone: data.phone,
            }

            const requestOptions = {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }


            fetch('/signup', requestOptions)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setServerResponse(data.message)
                    setShow(true)
                })
                .catch(err => console.log(err))

            reset()
        }

        else {
            alert("Passwords do not match")
        }


    }
    

    return (
        <div>
        <Header />
        <div className="container">
            
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="form">


                        {show ?
                            <>
                                <Alert variant="success" onClose={() => {
                                    setShow(false)
                                }} dismissible>
                                    <p>
                                        {serverResponse}
                                    </p>
                                </Alert>

                                <h1>Sign Up Page</h1>

                            </>
                            :
                            <h1>Sign Up Page</h1>

                        }
                        <form>
                            <Form.Group>
                                <Form.Label className='a'>First Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Your First Name"
                                    className='a'
                                    {...register("fname", { required: true, maxLength: 25 })}
                                />

                                {errors.username && <small style={{ color: "red" }}>First Name is required</small>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Last Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Your Last Name"
                                    className='a'
                                    {...register("lname", { required: true, maxLength: 25 })}
                                />
                                {errors.username && <small style={{ color: "red" }}>Last Name is required</small>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Username</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Your username"
                                    className='a'
                                    {...register("username", { required: true, maxLength: 25 })}
                                />

                                {errors.username && <small style={{ color: "red" }}>Username is required</small>}
                                {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 25 </small></p>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Email</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Your email"
                                    className='a'
                                    {...register("email", { required: true, maxLength: 80 })}
                                />

                                {errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}

                                {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 80</small></p>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Your password"
                                    className='a'
                                    {...register("password", { required: true, minLength: 8 })}

                                />

                                {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
                                {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Your password"
                                    className='a'
                                    {...register("confirmPassword", { required: true, minLength: 8 })}
                                />
                                {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirm Password is required</small></p>}
                                {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Label className='a'>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Your Phone Number"
                                    className='a'
                                    {...register("pnumber", { required: true, minLength: 11 })}
                                />
                                {errors.confirmPassword && <p style={{ color: "red" }}><small>Phone Number is required</small></p>}
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Button as="sub" className="signupbutton" variant="primary" onClick={handleSubmit(submitForm)}>Register</Button>
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <small>Already have an account, <Link to='/login'>Log In</Link></small>
                            </Form.Group>
                            <br></br>
                        </form>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={signuppic} width="550" height="400" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUpPage