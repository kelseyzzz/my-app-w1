import React, { Component } from 'react';

import Counter from './Counter';

class Counter2 extends Component
{
    render() {

      const { title } = this.props;
      
      return (
        <div className="">
          

           <p> Counter: 2 </p> 

           <Counter/>
           
          </div>
        );

    }
}


export default Counter2;