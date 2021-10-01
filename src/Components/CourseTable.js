import React from 'react'
import './CourseTable.css'

function CourseTable(props) {
    return (
        <tr>
            <td className="id">{props.id}</td>
            <td className="name"> {props.name}</td>
            <td className="description">{props.description}</td>
            <td className="category">{props.category}</td>
            <td className="subcategory">{props.subcategory}</td>
            <td className="deadline"> {props.deadline}</td>
            <td className="cost">{props.cost}</td>
            <td className="location">{props.location}</td>
            <td className="place"> {props.place}</td>
            <td className="spacesAvailable">{props.spacesAvailable}</td>
            <td className="signUpThrough">{props.signUpThrough}</td>
            <td className="rating">{props.rating}</td>
        </tr>
    )
}

export default CourseTable