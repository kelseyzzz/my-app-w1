import React, { Component } from 'react';

import Counter from './Counter';



class CounterForm extends Component


{

	contructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.
	}


    render() {

      const { title } = this.props;
      
      return (
        <div className="">

        	<form>

        		<label>
        		Name the counter:
        		<input 
        		 type="text"
        		 name="title" /> 
        		</label>

        		<label>
        		Initial value for the counter:
        		<input 
        		 type="number"
        		 name="initialValue"
        		 value={this.props.submitText} /> 

        		</label>

        		<button onClick={this.Save}>Save</button>

        	</form>
          

           <Counter/>
           
          </div>
        );

    }
}


export default CounterForm;