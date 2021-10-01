import React from 'react'
import './Table.css'

function Table(props) {
    return (
        <tr>
            <td className="id">{props.id}</td>
            <td className="name"> {props.name}</td>
            <td className="email">{props.email}</td>
            <td className="password">{props.password}</td>
            <td className="created_at">{props.created_at}</td>
            <td className="last_seen">{props.last_seen}</td>
        </tr>
    )
}

export default Table

