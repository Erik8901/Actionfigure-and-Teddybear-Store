import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './ProductsInStore.css'
import { actionChangeProductInput, actionAddToStore, actionRedo, actionUndo, actionChangeProduct, actionRemoveProduct} from './actions/actions.js';
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
    componentDidUpdate(){
      // console.log(this)
      // console.log("PAST PRODUCTS: ", this.props.products.past)
      // console.log("PRESENT PRODUCTS: ", this.props.products.present)
      // console.log("FUTURE PRODUCTS: ", this.props.products.future)
    }
    render() {

      console.log(this.props.products.present)
      let productChangeContent;
      let oldKey;
      const listOfProducts = this.props.products.present.map(x =>

        (

        <li className="items" key={x.name + x.price}>
        {(x.bool)

          ? (
            <React.Fragment>
            <input type="text" placeholder={x.name} onChange={e => this.setState({ changeProductName: e.target.value, oldKey: x.name + x.price})}/>
            <input type="text" placeholder={x.price} onChange={e => this.setState({ changeProductPrice: e.target.value})}/>
            <input type="text" placeholder={x.amount} onChange={e => this.setState({ changeProductAmount: e.target.value})}/>
            <button className="buyItem" onClick={this.changeProduct}>Go change</button>
            </React.Fragment>
          )
          :
          (
            <React.Fragment>
            <h3>{x.name}</h3>
            <span>Price: {x.price}</span><br/>
            <span>Amount in store: {x.amount}</span>
            <button className="buyItem" onClick={e => this.props.dispatch(actionChangeProductInput({name:x.name, price:x.price, amount: x.amount, key: x.name + x.price, bool: true}))} >Change</button>
            <button className="buyItem" onClick={e => this.props.dispatch(actionRemoveProduct({name:x.name, price:x.price, amount: x.amount, key: x.name + x.price}))} >Remove</button>
            </React.Fragment>          )
        }



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



    changeProduct = (event) => {
      let action = actionChangeProduct({
        name: this.state.changeProductName,
        price: Number(this.state.changeProductPrice),
        amount: Number(this.state.changeProductAmount),
        key: this.state.changeProductName + this.state.changeProductPrice,
        oldKey: this.state.oldKey,
        bool:false,
      });
      this.props.dispatch(action);
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
