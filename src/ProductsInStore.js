import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProductsInStore.css'
import {actionAddToCart} from './actions/actions.js';

class ProductsInStore extends Component {

  render() {
    console.log(this.props.products)
    let productStoreContent;
    const listOfProducts = this.props.products.map(x =>
      (<li className="items" key={x.name + x.price}>

      <h3>{x.name}</h3>
      <img className="productImg" src={require("./img/teddybear.png")}/>
      <span>Price: {x.price}</span><br/>
      <span>Amount in store: {x.amount}</span>
      <button className="buyItem" onClick={(event) => this.props.dispatch(actionAddToCart(x.name + x.price, x.amount))} disabled={x.amount === 0}>Add</button>

    </li>));

    productStoreContent = <ul className="container">{listOfProducts}</ul>
    return (<div>
      {productStoreContent}
    </div>)
  }
}

let mapStateToProps = state => {
  console.log(state.products)
  return {products: state.products,
          newProduct: state.newProduct}
}
export default connect(mapStateToProps)(ProductsInStore);
