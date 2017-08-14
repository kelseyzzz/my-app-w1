import React, { Component } from 'react';
import PropTypes from "prop-types";
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

      componentWillReceiveProps(nextProps) {
        console.log("Counter.componentWillReceiveProps", nextProps);

        let startingVal = nextProps.initialValue;
        if (!startingVal) {
          startingVal = 0;
        }
        this.setState({counter: startingVal});
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log("Counter.shouldComponentUpdate", nextProps, nextState);
        return true;
      }




    increment() {
      console.log('increment()', this);
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    decrement() {
      console.log('decrement()', this);
      let newCount = this.state.counter -1;
      if (newCount < 0) {
        newCount = 0;
      }
      this.setState({
        counter: newCount
      });
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


      Counter.propTypes = {
        title: PropTypes.string.isRequired,
        initialValue: PropTypes.number.isRequired
      };

      Counter.defaultProps = {
        title: 'new counter',
        initialValue: 0,
      };



export default Counter;