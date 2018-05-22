import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AddProductsToStore  from './addProductsToStore.js';

class AdminLoginDiv extends Component {
    constructor(props) {
		super(props);
		this.state = { inputUser: '',
                       inputPass: '',
                       checkAdminLogin: false};
    }

    
    render() {
        
        if(this.state.checkAdminLogin) {
           
            return(<div>
                <AddProductsToStore/>
                </div>)
        }
       
            
            return (
            <div className="loginDiv">
                Adminname:<input type="text" placeholder="adminname"
                      value={this.state.inputUser}
                      onChange={e => this.setState({ inputUser: e.target.value})}/>
                Adminpassword:<input type="password" placeholder="adminpassword"value={this.state.inputPass}
                      onChange={e => this.setState({ inputPass: e.target.value})}/>
                <button onClick={this.checkAdminLogin} type="submit">Login!</button>
            </div>
        
    )
    
    
    }
    checkAdminLogin = event => {
        
        if(this.state.inputUser === "admin" && this.state.inputPass === "admin") {
            
        this.setState({checkAdminLogin: true})
           console.log("Admin Logged in")
               
            } else {
            alert("WRONG")
         console.log("Admin Failed to login")
        }
        
    }
    
}

export default AdminLoginDiv;