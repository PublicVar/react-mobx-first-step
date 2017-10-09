import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
            type: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        const { name, age, type }  = this.state;

        /*fetch('https://kickass-sdw-3a.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              age: age,
              type: type
            })
          })*/
        this.props.add({
            _id: Math.random(),
            name,
            age,
            type
        })
        
    }

    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nameOfInput = target.name;

        this.setState({ [nameOfInput] : value });
    }

    render() {
        return (
            <div>
                <h1>Add user</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.name} className="form-control" id="name" name="name" placeholder="Name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" value={this.state.age} className="form-control" id="age" name="age" placeholder="Age" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" value={this.state.type} className="form-control" id="type" name="type" placeholder="Type" onChange={this.handleChange} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-lg" >Add</button>
                    </div>

                    

                </form>
            </div>
        );
    }
}

export default AddUser;