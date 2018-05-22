import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import ProductsInStore from './ProductsInStore.js'
import './ProductsInStore.css'
import { actionAddToStore} from './actions/actions.js';

class AddProductsToStore extends Component {
    constructor(props) {
		super(props);
		this.state = {
            inputName: '',
            inputPrice: '',
            InputAmount: '',
            addToStore: false
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
                <br/><button onClick={this.addToStore} type="submit">Add to Store</button>
                
                <button>Remove from Store
                </button>
            
            </div>
        
    )
    
    
    }
    addToStore = event => {
     
        let newProduct = {
            name: this.state.inputName,
            price: this.state.inputPrice,
            amount: this.state.inputAmount
        }
        console.log(newProduct)
        this.props.products.push(newProduct)
        console.log(this.props.products)
    }

}

let mapStateToProps = state => {
	return {
		products: state.products
	}
}

//name: "Teddybear Johan",
//      price: "99kr",
//      amount: 2

export default connect (mapStateToProps) (AddProductsToStore);