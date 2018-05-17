import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddItem, actionRemoveItem} from './actions/actions.js';


class Template extends Component {
    
   render() {
       
    return (
        <div>
            <h1>Spa Store!</h1>
            <p>Items:{this.props.items}</p>
            <button onClick={event => this.props.dispatch(actionAddItem())}>Add Item to Store!</button>
            <button onClick={event => this.props.dispatch(actionRemoveItem())}>Remove Item to Store!</button>
            
        </div>
    
    
        )
   }

}


let mapStateToProps = state => {
    return {
        items: state.items,
    };
}

export default connect(mapStateToProps)(Template);