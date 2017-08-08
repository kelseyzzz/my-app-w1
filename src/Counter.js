import React, { Component } from 'react';

class Counter extends Component

{
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

      this.state = {
        counter: 0,
      };

      this.baseState = this.state 
      
    }

    increment() {
      console.log('increment()', this);
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    decrement() {
      console.log('decrement()', this);
      this.setState({
        counter: this.state.counter - 1,
      })
    }

    reset () {
      console.log('reset()', this);
     this.setState(this.baseState)
    }

  	render() {

      const { counter } = this.state;
  		
  		return (
        <div>
    	        <p>
              {counter}
              </p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        );

    }
}


export default Counter;