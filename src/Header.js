import React, { Component } from 'react';


import { BrowserRouter, NavLink } from 'react-router-dom';


class Header extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
          <BrowserRouter>
    	    	<div className="App-header">

                <nav>
       
                    <NavLink exact={true} to="/" activeStyle={{ color: 'orange' }}>Home</NavLink>
                    
                    <NavLink to="/about" activeStyle={{ color: 'green' }}>Counter 1</NavLink>

                    <NavLink to="/counter2" activeStyle={{ color: 'blue' }}>Counter 2</NavLink>
         
                </nav>

    	        </div>
            </BrowserRouter>
        );

    }
}


export default Header;