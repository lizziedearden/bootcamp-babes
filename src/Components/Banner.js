import React from 'react'
import './Banner.css'

function Banner(props) {
    return (
        <div className='content'>
            <span className="title">
                {props.title}
            </span>
            <br />
            <span className="text">
                {props.text}
            </span>
        </div>
    )
}

export default Banner