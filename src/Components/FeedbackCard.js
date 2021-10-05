import React, { useState } from 'react'
import './Card.css'

function FeedbackCard(props) {

    return (

        <div >
            <div className="centerText">
                <h5 className="card-id">{props.id}</h5>
                <p className="card-courseId"> Course ID: {props.courseId}</p>
                <p className="card-comment">Comment: "{props.comment}"</p>
                <p className="card-rating">{props.rating} stars</p>
            </div>
        </div>
    )
}

export default FeedbackCard

