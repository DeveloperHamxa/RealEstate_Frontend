import React from 'react'

export const LOGIN = "Login";
export const LOGOUT = "LOGOUT";
export const doLogin = (email, password) => async (dispatch) => {
    
    const body = {
        email: data.email,
        password: data.password
    }
    const requestOptions = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    fetch('/login', requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (body.email == data.data.user.email) {
                navigate("/");
                console.log('user logged in')
            }
            else {
                navigate("/signup");
            }

  }
}
  