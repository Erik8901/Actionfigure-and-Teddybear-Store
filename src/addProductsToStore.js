import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import './ProductsInStore.css'
import { actionAddToStore, actionRedo, actionUndo} from './actions/actions.js';
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

    render() {
        return (
            <div className="AddProductsDiv">
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
