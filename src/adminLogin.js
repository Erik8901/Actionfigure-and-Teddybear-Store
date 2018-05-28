
import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './App.css';
import AdminLoginDiv from './adminLoginDiv.js'



class AdminLogin extends Component {
  constructor(props) {
       super(props)
      this.state = { show: false,
        hideOrShow: "showAdminLogin",


      }


   }
    showLogin = (event) => {
       this.setState({
         show: !this.state.show,
         hideOrShow: "hideAdminLogin"
       })
    }

    render() {


    return (
      <div>
        <div className={this.state.hideOrShow}>
            <h3>Admin Login</h3>
            <button onClick={this.showLogin.bind(this)}>Login as admin</button>
            </div>
            <div>
               {this.state.show && <AdminLoginDiv/>}
            </div>

        </div>
    )


    }

}



export default  AdminLogin;
