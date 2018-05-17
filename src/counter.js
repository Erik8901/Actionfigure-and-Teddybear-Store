import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log("render", props)
    return (
        <div>
            <h1>Spa Store!</h1>
            <p>Items:{props.items}</p>
            <button onClick={props.onIncreamentClick}>Add Item to Store!</button>
            <button onClick={props.onRemoveClick}>Remove Item to Store!</button>
            
        </div>
    
    
    )
}

function mapStateToProps(state) {
    console.log("mapStateToProps")
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps")
    return {
        onIncreamentClick: () => {
            
            const action = { type: 'Add'};
            dispatch(action)
        },
        onRemoveClick: () => {
        
        const action1 = { type: "remove"};
        dispatch(action1)
    }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);