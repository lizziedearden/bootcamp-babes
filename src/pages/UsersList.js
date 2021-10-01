import React from 'react';
import Table from '../Components/Table'
import axios from 'axios';
import '../Components/Table.css'

export default class UsersList extends React.Component {

  render() {
    return (
        <div>
            <h3>List of Users</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Created At</th>
                        <th>Last Seen</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => 
                    <Table id={user.id}
                    name={user.name} 
                    email={user.email} 
                    password={user.password} 
                    created_at={user.created_at} 
                    last_seen={user.last_seen}/>
                    )}
                </tbody>
            </table>
        </div>

    )}
}

