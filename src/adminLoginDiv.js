import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AddProductsToStore from './addProductsToStore.js';
import {actionLoginAdmin} from "./actions/actions.js";


class AdminLoginDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: '',
      inputPass: '',
      loggedInAsAdmin: false,
    };
    // console.log(this.state);
  }

  render() {

    if (this.state.loggedInAsAdmin) {
      return (<div className={this.props.hideOrShow}>
        <button  onClick={this.checkAdminLogin} type="button">Logout</button>
        <AddProductsToStore/>
      </div>)
    }

    return (<div className="loginDiv">
      <form>
        Username:<input type="text" placeholder="Username" value={this.props.inputUser} onChange={e => this.setState({inputUser: e.target.value})}/>
        Password:<input type="password" autoComplete="" placeholder="Password" value={this.state.inputPass} onChange={e => this.setState({inputPass: e.target.value})}/>
        <button onClick={this.checkAdminLogin} type="button">Enter</button>
      </form>
    </div>)

  }
  checkAdminLogin = (e) => {
    if(!this.state.loggedInAsAdmin){
      this.setState({
        loggedInAsAdmin: true,
      })
    }else{
      this.setState({
        loggedInAsAdmin: false,
      })
    }
    let action = actionLoginAdmin({
      adminName: this.state.inputUser,
      adminPassword: this.state.inputPass,
      loggedInAsAdmin: this.state.loggedInAsAdmin,

    });
    this.props.dispatch(action)

  }

}
let mapStateToProps = state => {

  return {admin: state.admin, userInput: state.inputUser, userPass: state.inputPass};

}
export default connect(mapStateToProps)(AdminLoginDiv);
