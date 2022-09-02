import { getSuggestedQuery } from '@testing-library/react'
import React, {useEffect} from 'react'
import { useState } from 'react'

export default function Searchproperty() {

  const [user,setuser] = useState([])

  const getUser = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    setuser(await response.json());
  }

  useEffect(()=>{
    getUser();
  })
  return (
    <div>
     { user.map((item) => {
        <h1>
          {item.id}
        </h1>
      })
    }
    </div>
  )
}
