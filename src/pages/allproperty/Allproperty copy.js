import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';


export default function Searchproperty() {

  const [property, setProperty] = useState([])
  const [searchItem, setSearchItem] = useState()

  const getProperty = async () => {
    const response = await fetch("/https://jsonplaceholder.typicode.com/todos/5");
    const data = await response.json()
    console.log(data)
    setProperty(data.result);

  }

  useEffect(() => {
    getProperty();
  }, []);
  console.log(property)

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 className='header'>Find your dream home here</h1>
      </div>
      <div className='main'>
        <div className="form-group has-search">
          <Form.Group>
            <AiOutlineSearch className="fa fa-search form-control-feedback" />
            <Form.Control type="text"
              placeholder="Find your dream home"
              className='a'
              onChange={event => {
                setSearchItem(event.target.value)
              }}
            />
          </Form.Group>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="row">
          {property.filter((val)=> {
            if(searchItem == ""){
              return val
            }else if (val.name.toLowerCase().includes(searchItem.toLowerCase())){
              return val
            }
          }).map((items) => {
            return (
              <div className="col-lg-3">
                <Card data={items} />
              </div>)
          })}


        </div>
      </div>
    </div>
  );
}
