import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Hero.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form'
import { useEffect } from 'react';



export default function Hero() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')
    const [property, setProperty] = useState([])

    let navigate = useNavigate();


    const submitForm = (data) => {

        console.log(data)
        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/property', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProperty([data.result.name])
                console.log(setProperty)
                setServerResponse(data.message)
                setShow(true)
            })
            .catch(err => console.log(err))

    }



    return (
        <div className='herosection'>
            <section className="bgimage">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-image">
                            <Typewriter
                                options={{
                                    strings: ['To each their home', 'Let’s find a home that’s perfect for you'],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                            <div className='main'>
                                <div className="form-group has-search">
                                    <Form.Group>
                                        <AiOutlineSearch className="fa fa-search form-control-feedback" />
                                        <Form.Control type="text"
                                            placeholder="Find your dream home"
                                            className='a'
                                            {...register("name", { required: true, maxLength: 25 })}
                                        />
                                    </Form.Group>
                                    <Form.Group>

                                        <div>
                                            <Button as="sub" variant="primary" className='btn btn-md searchbtn' onClick={handleSubmit(submitForm)}>Search</Button>
                                           {property.map((items)=>{
                                                <h1></h1>
                                            })}
                                            
                                            <Button variant="outline-light" className="btn btn-md searchbtn2"  onClick={()=>navigate("/addproperty")}>Add Property</Button>
                                        </div>


                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}