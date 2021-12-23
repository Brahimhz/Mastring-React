import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component{


  state = {
      counters : [
          {id : 1 , value : 4},
          {id : 2 , value : 3},
          {id : 3 , value : 2},
          {id : 4 , value : 1}
      ]
  };

  handleIncrement = counter => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;

    this.setState({counters});
  };

  handleDecrement = counter => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value --;

    this.setState({counters});
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(counter => counter.id !== counterId);

    this.setState({ counters : newCounters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
    });

    this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
            
        <NavBar totalCounters = {this.state.counters.filter(c => c.value >0).length}/>

        <main className="container">

          <Counters 
            counters = {this.state.counters}
            onDelete = {this.handleDelete} 
            onIncrement = {this.handleIncrement} 
            onDecrement = {this.handleDecrement}
            onReset = {this.handleReset}
            />

        </main> 

      </React.Fragment>

    )
  }
}

export default App;
