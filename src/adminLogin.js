
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

      let showOrHideLogin;
if(!this.state.show){
  let showLogin =
        (
          <div>
            <div className={this.state.hideOrShow}>
                <h3>Admin login</h3>
                <button onClick={this.showLogin.bind(this)}>Login</button>
                </div>
            </div>
        );

         showOrHideLogin = <div>{showLogin} <AdminLoginDiv/></div>
}else{
  let hideLogin =
  (
    <div>
      <div className={this.state.hideOrShow}>
          <h3>Admin logout</h3>
          
          </div>


      </div>
  );
   showOrHideLogin = <div>{hideLogin} <AdminLoginDiv/></div>
}

    return (
      <div>
        {showOrHideLogin}
        </div>
    )


    }

}



export default  AdminLogin;
