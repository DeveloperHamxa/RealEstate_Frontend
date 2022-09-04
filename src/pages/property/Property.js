import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import property from '../../assets/images/property.png';
import { useForm } from 'react-hook-form'
import Header from '../../components/header/Header';
import './Property.css'
import Axios from 'axios'

export default function Property() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')

    const [image, setImage] = useState('')

    const [imagesent, setimagesent] = useState('')

    const submitForm = (data) => {

        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "akhcyquy")

        Axios.post("https://api.cloudinary.com/v1_1/dzgquhrlv/image/upload", formData).then((response) => {
            setimagesent(response.data.url)
        })

        const body = {
            name: data.name,
            location: data.location,
            ptype: data.ptype,
            ftype: data.ftype,
            area: data.area,
            price: data.price,
            image: imagesent
        }

        console.log(body)

        const requestOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }


        fetch('/addproperty', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServerResponse(data.message)
                setShow(true)
            })
            .catch(err => console.log(err))

        reset()
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

                                    <h1 className='heading1'>Add your property</h1>

                                </>
                                :
                                <h1 className='heading1'>Add your property</h1>

                            }
                            <form>
                                <Form.Group>
                                    <Form.Label className='a'>Property Title</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Your Property Name"
                                        className='a'
                                        {...register("name", { required: true, maxLength: 25 })}
                                    />

                                    {errors.ptitle && <small style={{ color: "red" }}>Property Title is required</small>}
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Location</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Location"
                                        className='a'
                                        {...register("location", { required: true, maxLength: 25 })}
                                    />
                                    {errors.location && <small style={{ color: "red" }}>Location is required</small>}
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Property Type</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Apartment, villa, Studio"
                                        className='a'
                                        {...register("ptype", { required: true, maxLength: 25 })}
                                    />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Area or Size</Form.Label>
                                    <Form.Control type="text"
                                        placeholder=" Area or Size: per square meter."
                                        className='a'
                                        {...register("area", { required: true, maxLength: 80 })}
                                    />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Finish Type</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Furnished, Finished with ACs, Kitchen, Finished without AC"
                                        className='a'
                                        {...register("ftype")}

                                    />

                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Images</Form.Label>
                                    <Form.Control type="file" placeholder="Property Images"
                                        className='a'
                                        onChange={(event) => {
                                            setImage(event.target.files[0])
                                        }}
                                    />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label className='a'>Set Asking Price</Form.Label>
                                    <Form.Control type="number" placeholder="Set Asking Price"
                                        className='a'
                                        {...register("price")}
                                    />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Button as="sub" className="signupbutton" variant="primary" onClick={handleSubmit(submitForm)}>Add Property</Button>
                                </Form.Group>
                                <br></br>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={property} width="550" height="400" />
                    </div>
                </div>
            </div>
        </div>
    )
}
