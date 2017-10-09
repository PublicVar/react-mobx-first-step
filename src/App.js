import React, { Component } from 'react';
import './App.css';

import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import store from './service/store';
import {observer} from "mobx-react";

@observer
class App extends Component {
  constructor(props){
    super(props);
    store.listUsers();
  }
  render() {
    
    return (
      <div className="App">
        <AddUser add={store.addUser.bind(store)} />
        <ListUsers users={store.users}  />
      </div>
    );
  }
}

export default App;
