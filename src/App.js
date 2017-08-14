import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route, } from 'react-router-dom';
 
import Header from './Header';
import Root from './Root';
import About from './About';
import Counter2 from './Counter2';
import CounterForm from './CounterForm';
import NotFound404 from './NotFound404';



class App extends Component
{

  constructor(props) {
      super(props);

      this.state = {
        name: 'Kelsey',
      };
    }


  render() {
    
  

    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/about" component={About} />
            <Route path="/counter2" component={Counter2} />
            <Route path="/CounterForm" component={CounterForm} />
            <Route component={NotFound404} />
          </Switch>

         
          
        </div>
      </BrowserRouter>
    );

  }
}

export default App;

