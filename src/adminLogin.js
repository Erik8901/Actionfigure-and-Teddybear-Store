import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testBtn } from './actions/actions.js';
import { adminLogin } from './actions/actions.js';


class Adminlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }
    
   render() {
       
    return (
        <div>
            <h4>Admin login</h4>
            <button onClick={event => this.props.dispatch(adminLogin())}>Login</button>
            
            
            
            <p> {this.props.items} {this.state.input} </p>
            <input  onChange={ev1 => this.setState({ input: ev1.target.value})}
                value = { this.state.input}
                type="text" 
                placeholder="username">
            </input>
            <input type="text" placeholder="password"></input>
            <button onClick={ev => this.props.dispatch(testBtn())}>Admin Login!</button>

        </div>
    
    
        )
   }

}


let mapStateToProps = state => {
    return {
        item: state.value
    };
}

export default connect (mapStateToProps)(Adminlogin) ;