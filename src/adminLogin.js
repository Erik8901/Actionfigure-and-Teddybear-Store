import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AdminLoginDiv from './adminLoginDiv.js'



class AdminLogin extends Component {
  constructor(props) {
       super(props)
      this.state = { show: false}
       
       
   }
    showLogin = (event) => {
       this.setState({show: !this.state.show})
    }
    
    render() {
        
    
    return (
        <div className="admins">
            <h3>AdminLogin</h3>
            <button onClick={this.showLogin.bind(this)}>Login Admin</button>
            
            <div>
               {this.state.show && <AdminLoginDiv/>}
            </div>
        </div>
    )
    
    
    }
    
}



export default  AdminLogin;