
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
      // console.log(this.state.show)
      if(!this.state.show){
       this.setState({
         show: true,
         hideOrShow: "hideAdminLogin"
       })
     }else if(this.state.show){
       this.setState({
         show: false,
         hideOrShow: "showAdminLogin"
       })
     }
    }

    render() {


    return (
      <div>
        <AdminLoginDiv/>
        </div>
    )


    }

}



export default  AdminLogin;
