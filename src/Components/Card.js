import React, { useState } from 'react'
import './Card.css'

function Card(props) {

    return (
        <div className="card flip-card" styles="width: 18rem;">
            <div className="flip-card-inner">
                <div className="card-body flip-card-front">
                    {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                    <div className="centerText">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-deadline">Deadline to apply: {props.deadline}</p>
                        <p className="card-space_available">Spaces : {props.spacesAvailable}</p>
                        <p className="card-place">Place : {props.place}</p>
                    </div>
                </div>
                <div className="card-body flip-card-back">
                    <p className="card-description">{props.description}</p>
                    <p className="card-signUp">Sign-Up at link below: </p>
                    <a href={props.signUpThrough}>{props.signUpThrough} </a>
                    
                    
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More...</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Helllloooo test</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p> test </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Card

