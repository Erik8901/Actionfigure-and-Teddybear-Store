import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProductsInStore.css'
import {actionAddToCart} from './actions/actions.js';
import Cart from "./cart.js"
import {updateCart} from "./actions/actions.js"

class ProductsInStore extends Component {
  render() {

    let productStoreContent;
    const listOfProducts = this.props.products.present.map(x =>
      (<li className="items" key={x.name + x.price}>

      <h3>{x.name}</h3>
      <img className="productImg" src={require("./img/teddybear.png")} alt=" "/>
      <span>Price: {x.price}kr</span><br/>
      <span>Amount in store: {x.amount}</span>
      <button className="buyItem" onClick={e => this.handleClick(x.name, x.price, x.amount)} disabled={x.amount === 0}>Add to cart</button>

    </li>));

    this.handleClick = (name, price, amount) =>{

      this.props.dispatch(actionAddToCart(name + price))
      this.props.dispatch(updateCart({name:name, price:price, amount: amount}))

    }

    productStoreContent = <ul className="container">{listOfProducts}</ul>

    return (<div>
      {productStoreContent}
      <Cart />
    </div>)
  }

}

let mapStateToProps = state => {
  return {
    products: state.products,
    newProduct: state.newProduct
  }
}
export default connect(mapStateToProps)(ProductsInStore);
