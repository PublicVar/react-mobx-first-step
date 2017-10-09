import React, { Component } from 'react';
import TableUsers from './components/TableUsers';
import 'whatwg-fetch';
import {observer} from "mobx-react";
/**
 * Liste les utilisateurs
 */
//"Transforme" le composant en observateur. Il pourra observer des observables
@observer
class ListUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-8">
                    <h1 className="text-center">List Users</h1>
                    <TableUsers users={this.props.users} />
                </div>
            </div>
        );
    }
}

export default ListUsers;