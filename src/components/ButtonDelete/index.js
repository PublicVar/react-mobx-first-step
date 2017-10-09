import React, { Component } from 'react';

class ButtonDelete extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.userStore.deleteUser(this.props.id);
    }

    render() {
        return (
            <button type="button"
            className="btn btn-danger btn-xs"
            onClick={this.handleClick}
         >
                x
            </button>
        );
    }
}

export default ButtonDelete;