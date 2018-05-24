import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './ProductsInStore.css'
import { actionAddToStore, actionRedo, actionUndo, actionChangeProduct, actionRemoveProduct} from './actions/actions.js';
// import { ProductsInStore } from './ProductsInStore.js'

class AddProductsToStore extends Component {
    constructor(props) {
		super(props);
		this.state = {
            inputName: '',
            inputPrice: '',
            InputAmount: '',
            // addToStore: false
        }
    }
    componentDidUpdate(){
      // console.log(this)
      // console.log("PAST PRODUCTS: ", this.props.products.past)
      // console.log("PRESENT PRODUCTS: ", this.props.products.present)
      // console.log("FUTURE PRODUCTS: ", this.props.products.future)
    }
    render() {

      let productChangeContent;
      const listOfProducts = this.props.products.present.map(x =>
        (<li className="items" key={x.name + x.price}>
        <h3>{x.name}</h3>
        <span>Price: {x.price}</span><br/>
        <span>Amount in store: {x.amount}</span>
        <button className="buyItem" onClick={e => this.props.dispatch(actionChangeProduct({name:x.name, price:x.price, amount: x.amount, key: x.name + x.price}))} disabled={x.amount === 0}>Change</button>
        <button className="buyItem" onClick={e => this.props.dispatch(actionRemoveProduct({name:x.name, price:x.price, amount: x.amount, key: x.name + x.price}))} disabled={x.amount === 0}>Remove</button>

      </li>));


      productChangeContent = <ul className="container">{listOfProducts}</ul>


        return (
            <div className="changeProductDiv">
                <h2>Add a New Product to the store</h2>
                Name:<input type="text" placeholder="productName"
                onChange={e => this.setState({ inputName: e.target.value})}/>
                Price:<input type="text" placeholder="productPrice"
                onChange={e => this.setState({ inputPrice: e.target.value})}/>
                Amount:<input type="text" placeholder="productAmount"
                onChange={e => this.setState({ inputAmount: e.target.value})}/>
                <br/><button onClick={this.addToStore}>Add to Store</button>
                <button onClick={e => this.props.dispatch(actionUndo())} disabled={!this.props.actionUndo}>Undo</button>
                <button onClick={e => this.props.dispatch(actionRedo())} disabled={!this.props.actionRedo}>Redo</button>

                <div>{productChangeContent}</div>
            </div>
          )
        }



    addToStore = event => {
        let action = actionAddToStore({
            name: this.state.inputName,
            price: Number(this.state.inputPrice),
            amount: Number(this.state.inputAmount),
            key: this.state.inputName+this.state.inputPrice
        });
        this.props.dispatch(action);
    }
}

let mapStateToProps = state => {
	return {
      products: state.products,
      actionUndo: state.products.past.length > 0,
		    actionRedo: state.products.future.length > 0
	}
}

export default connect (mapStateToProps) (AddProductsToStore);
