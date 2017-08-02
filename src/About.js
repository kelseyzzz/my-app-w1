import React, { Component } from 'react';

import Counter from './Counter';
class About extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="">
          
	         

	         <Counter/>
	        </div>
        );

    }
}


export default About;