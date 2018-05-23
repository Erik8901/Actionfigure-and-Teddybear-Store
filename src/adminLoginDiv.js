import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AddProductsToStore  from './addProductsToStore.js';
import { actionLoginAdmin } from "./actions/actions.js"

class AdminLoginDiv extends Component {
    constructor(props) {
		super(props);
		this.state = { inputUser: '',
                       inputPass: '',
                       loggedInAsAdmin: false
                       };
         console.log(this.state)
    }
   
  
    render() {
         
        
        if(this.props.admin.loggedInAsAdmin) {
           
            return(<div>
                <AddProductsToStore/>
                </div>)
        }
       
            
            return (
            <div className="loginDiv">
                Adminname:<input type="text" placeholder="adminname"
                      value={this.props.inputUser}
                      onChange={e => this.setState({ inputUser: e.target.value})}/>
                Adminpassword:<input type="password" placeholder="adminpassword"value={this.state.inputPass}
                      onChange={e => this.setState({ inputPass: e.target.value})}/>
                <button onClick={this.checkAdminLogin} type="submit">Login!</button>
                    
            </div>
        
    )
    
    
    }
    checkAdminLogin = (e) => {
        
        let action = actionLoginAdmin({
            adminName: this.state.inputUser,
            adminPassword: this.state.inputPass,
            loggedInAsAdmin: this.state.loggedInAsAdmin
            
        });
        this.props.dispatch(action)
        
        
        

        
    }
    
}

let mapStateToProps = state => {
    
    return {
        admin: state.admin,
        userInput: state.inputUser,
        userPass: state.inputPass
        
    };
   
}

export default connect(mapStateToProps) (AdminLoginDiv);