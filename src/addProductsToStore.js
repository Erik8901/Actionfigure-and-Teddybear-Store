import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './ProductsInStore.css'
import {
  actionChangeProductInput,
  actionAddToStore,
  actionRedo,
  actionUndo,
  actionChangeProduct,
  actionRemoveProduct
} from './actions/actions.js';
// import { ProductsInStore } from './ProductsInStore.js'

class AddProductsToStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputPrice: '',
      InputAmount: '',
      changeProductName: '',
      changeProductPrice: '',
      changeProductAmount: '',
      changeProductKey: '',
      oldKey: ''
    }
  }
  componentDidUpdate() {
    // console.log(this)
    // console.log("PAST PRODUCTS: ", this.props.products.past)
    // console.log("PRESENT PRODUCTS: ", this.props.products.present)
    // console.log("FUTURE PRODUCTS: ", this.props.products.future)
  }

  handleChange = (event) => {
    this.setState({inputName: event.target.value})

  }

  handleChange1 = (event) => {
    this.setState({inputPrice: event.target.value})

  }

  handleChange2 = (event) => {
    this.setState({inputAmount: event.target.value})

  }
  render() {

    // console.log(this.props.products.present)
    let productChangeContent;
    // let oldKey;
    const listOfProducts = this.props.products.present.map(x => (<li className="changeInputItems" key={x.name + x.price}>
      {
        (x.bool)

          ? (<div className="changeInputDiv">
            <span>Name:</span><input type="text" placeholder={x.name} onChange={e => this.setState({
              changeProductName: e.target.value,
              oldKey: x.name + x.price
            })}/><br/>
            <span>Price:</span><input type="text" placeholder={x.price} onChange={e => this.setState({changeProductPrice: e.target.value})}/><br/>
            <span>Amount:</span><input type="text" placeholder={x.amount} onChange={e => this.setState({changeProductAmount: e.target.value})}/><br/>
            <button className="changeToyBtn" onClick={this.changeProduct}>Update toy</button>
          </div>)
          : (<div className="changeInputDiv">
            <h3>{x.name}</h3>
            <span>Price: {x.price}kr</span><br/>
            <span>Amount in store: {x.amount}</span>
            <button className="changeRemoveBtn" onClick={e => this.props.dispatch(actionChangeProductInput({
                name: x.name,
                price: x.price,
                amount: x.amount,
                key: x.name + x.price,
                bool: true
              }))}>Change</button>
            <button className="changeRemoveBtn" onClick={e => this.props.dispatch(actionRemoveProduct({
                name: x.name,
                price: x.price,
                amount: x.amount,
                key: x.name + x.price
              }))}>Remove</button>
          </div>)
      }

    </li>));

    productChangeContent = <ul className="container">{listOfProducts}</ul>

    return (<div >
      <div className="changeProductDiv">
        <h2 className="addOrChangeHeader">Add or change products</h2>
        <div className="addToStore">
          Name:<input type="text" placeholder="Product name" onChange={this.handleChange} ref="refName"/>
          Price:<input type="text" placeholder="Price" onChange={this.handleChange1} ref="refPrice"/>
          Amount:<input type="text" placeholder="Amount in store" onChange={this.handleChange2} ref="refAmount"/>
        </div>
        <br/>
        <button disabled={!this.state.inputName,
          !this.state.idnputPrice,
          !this.state.inputAmount} onClick={this.addToStore}>Add to Store</button>

        <button onClick={e => this.props.dispatch(actionUndo())} disabled={!this.props.actionUndo}>Undo</button>
        <button onClick={e => this.props.dispatch(actionRedo())} disabled={!this.props.actionRedo}>Redo</button>

        <div>{productChangeContent}</div>
      </div>
    </div>)
  }

  changeProduct = (event) => {
    let action = actionChangeProduct({
      name: this.state.changeProductName,
      price: Number(this.state.changeProductPrice),
      amount: Number(this.state.changeProductAmount),
      key: this.state.changeProductName + this.state.changeProductPrice,
      oldKey: this.state.oldKey,
      bool: false
    });
    this.props.dispatch(action);
  }

  addToStore = event => {
    let action = actionAddToStore({
      name: this.state.inputName,
      price: Number(this.state.inputPrice),
      amount: Number(this.state.inputAmount),
      key: this.state.inputName + this.state.inputPrice
    });
    this.props.dispatch(action);
        this.refs.refName.value = '';
        this.refs.refPrice.value = '';
        this.refs.refAmount.value = '';
        this.setState({inputName:''});
        this.setState({inputPrice:''});
        this.setState({inputAmount:''});
        this.setState({inputName: this.inputName});
        this.setState({inputPrice: this.inputPrice});
        this.setState({inputAmount: this.inputAmount});
  }
}

let mapStateToProps = state => {
  return {
    products: state.products,
    actionUndo: state.products.past.length > 0,
    actionRedo: state.products.future.length > 0
  }
}

export default connect(mapStateToProps)(AddProductsToStore);
