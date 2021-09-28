import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card" styles="width: 18rem;">
             {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
            <div className ="card-body">
                <h5 className ="card-title">{props.title}</h5>
                <p className ="card-text">{props.text}</p>
                <a href="#" className ="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    )
}

export default Card