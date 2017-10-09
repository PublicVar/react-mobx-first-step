import React, { Component } from 'react';
import {observer} from "mobx-react";
/**
 * Table des utilisateurs
 */
import ButtonDelete from './../../../ButtonDelete';

//"Transforme" le composant en observateur. Il pourra observer des observables
@observer
class TableUsers extends Component {
    render() {
        const { users } = this.props;
        let filterUsers = [];
        //on garde que les utilisateurs avec un name
        if(users !== undefined){
            filterUsers = users.filter(
                (user) => user.name !== undefined 
            );
        }
            
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {  
                        filterUsers.map((user, index ) => {
                            return <tr key={index} >
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.type}</td>
                                <td> <ButtonDelete userStore={this.props.userStore} id={user._id} /> </td>
                            </tr>
                        })
                     }
                </tbody>
            </table>
        );
    }
}

export default TableUsers;