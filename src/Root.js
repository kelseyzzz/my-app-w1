import React, { Component } from 'react';


import './App.css';


class Root extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="">
          <p className="App-intro">
            This is the home page. 
          </p>
          <p className="App-intro">
            Check out the fun <a href="./About">counter</a>.
          </p>
        
	        </div>
        );

    }
}


export default Root;