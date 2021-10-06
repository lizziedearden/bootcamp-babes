import React, { useState } from 'react'
import './Card.css'

function WishlistCard(props) {

    return (

        <div >
            <div className="centerText">
                <h5 className="card-id">Course ID: {props.id}</h5>
                <p className="card-name"> Name: {props.name}</p>
                <p className="card-rating">Rating: {props.rating} stars</p>
                <p className="card-description"> Description: {props.description}</p>
                <p className="card-category"> Category: {props.category}</p>
                <p className="card-subcategory"> Subcategory: {props.subcategory}</p>
                <p className="card-deadline"> Deadline: {props.deadline}</p>
                <p className="card-cost"> Cost: £{props.cost}</p>
                <p className="card-location"> Location: {props.location}</p>
                <p className="card-place"> Place: {props.place}</p>
                <p className="card-spacesAvailable"> Spaces Available: {props.spacesAvailable}</p>
                <p className="card-signUpThrough"> Sign Up Through: <a href={props.signUpThrough}>{props.signUpThrough} </a></p>
            </div>
        </div>
    )
}

export default WishlistCard

              
                    
                    
                    
                    
