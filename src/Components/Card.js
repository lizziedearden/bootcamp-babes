import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div class="flip-card" className="card" styles="width: 18rem;">
            <div class="flip-card-inner">
                <div class="flip-card-front" className ="card-body">
                {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                    <h5 className ="card-title">{props.title}</h5>
                    <p className ="card-text">{props.text}</p>
                </div>
                <div class="flip-card-back">
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card