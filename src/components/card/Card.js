import React from 'react'
import './Card.css'

export default function Cards(props) {
  console.log("Props", props)

  return (

    <div className="container">
      <div className="box">
        <div className="top">
          <img src={props.data.image} alt="" />
        </div>
        <div className="bottom">
          <h3>{props.data.name}</h3>
          <p>
            {props.data.name}
          </p>
          <p>
            <i class="fa fa-map-marker " aria-hidden="true"></i> {props.data.location}
          </p>
          <div className="advants">
            <div>
              <span>Bedrooms</span>
              <div><i className="fas fa-th-large"></i><span>3</span></div>
            </div>
            <div>
              <span>Bathrooms</span>
              <div><i className="fas fa-shower"></i><span>3</span></div>
            </div>
            <div>
              <span>Area</span>
              <div>
                <i className="fas fa-vector-square"></i
                ><span> {props.data.area}<span>Sq Ft</span></span>
              </div>
            </div>
          </div>
          <div className="price">
            <span>For Sale</span>
            <span>PKR {props.data.price}</span>
          </div>
        </div>
      </div>
    </div>

  )
}
