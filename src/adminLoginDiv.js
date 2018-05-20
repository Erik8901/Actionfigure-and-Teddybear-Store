import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { showLogin } from './actions/actions.js';

class AdminLoginDiv extends Component {
  
    
    render() {
        return (
            <div className="loginDiv">
                name:<input type="text" placeholder="adminname"/>
                password:<input type="text" placeholder="adminpassword"/>
                <button type="submit">Login!</button>
            </div>
        
    )
    
    
    }
    
}



export default AdminLoginDiv;