import React, { Component } from 'react';


import { BrowserRouter, NavLink } from 'react-router-dom';


class Header extends Component
{
  	render() {

  		
  		return (
         
    	    	<div className="App-header">

                <nav>
       
                    <NavLink exact to="/" activeStyle={{ color: 'orange' }}>Home</NavLink>
                    
                    <NavLink to="/about" activeStyle={{ color: 'green' }}>Counter 1</NavLink>

                    <NavLink to="/counter2" activeStyle={{ color: 'blue' }}>Counter 2</NavLink>

                    <NavLink to="/counter-form" activeStyle={{ color: 'blue' }}>Counter Form</NavLink>
         
                </nav>

    	        </div>
            
        );

    }
}


export default Header;