import React, { Component } from 'react'

class Counter extends React.Component {

    render() { 
        
        const { counter , onDelete , onIncrement , onDecrement } = this.props;

        return (
        <div className="row">
            <div className="col-sm-1">
                <span className={this.getBadgeClasses(counter)}>{this.formatCount()}</span>
            </div>
            <div className="col-sm">
                <button onClick={() => onIncrement(counter)} className='btn btn-secondary btn-sm m-2'>+</button>
                <button onClick={() => onDecrement(counter)} className={this.getBtDecrementClasses(counter)}>-</button>
                <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">x</button>
            </div>
            
        </div>
        );
    }


    getBadgeClasses(counter) {
        let classes = "badge m-2 bg-";
        classes += counter.value === 0 ? "warning" : "primary";

        return classes;
    }

    getBtDecrementClasses(counter) {
        let classes = "btn btn-secondary btn-sm m-2 ";
        classes += counter.value === 0 ? "disabled" : "";

        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value == 0 ? "Zero" : value;
    }
}
 
export default Counter;