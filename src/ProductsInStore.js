import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProductsInStore.css'

import AddProductsToStore from './addProductsToStore.js';
// import { actionAddItem, actionRemoveItem} from './actions/actions.js';

import { actionAddToCart } from './actions/actions.js';
import {addProduct} from "./actions/actions.js"
import Cart from "./cart.js"


class ProductsInStore extends Component {

  render() {
    // console.log(this.props.products)

    let productStoreContent;
    console.log(this.props)
    let self = this;
    const listOfProducts = this.props.products.map( x => (


      <li className="items" key={x.name + x.price}>

      <h3>{x.name}</h3>
      <img className="productImg"  src={require("./img/teddybear.png")}/>
      <span>Price: {x.price}</span><br/>
      <span>Amount in store: {x.amount}</span>
      <button className="buyItem" disabled={x.amount ===0} onClick={e => this.handleClick(x.name, x.price)}>Add</button>
      <button className="removeItem">Remove</button>
      </li>

    ));


    this.handleClick =(name, price)=>{
      self.props.dispatch(actionAddToCart(name + price))
      self.props.dispatch(addProduct(name, price, name + price))
    }

    productStoreContent = <ul className="container">{listOfProducts}</ul>
    return (<div>
      {productStoreContent}
      <Cart/>
    </div>)
  }
}

let mapStateToProps = state => {

  console.log(state.products)
  return {products: state.products,
         newProduct:state.newProduct}
    console.log(state.newProduct)

  // console.log(state.products)
  // console.log(state.products.amount)
  return {
  products: state.products,
  // amount: state.products.amount
  }

}
export default connect(mapStateToProps)(ProductsInStore);
