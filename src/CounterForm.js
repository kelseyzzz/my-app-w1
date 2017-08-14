import React, { Component } from "react";

import Counter from "./Counter";

const KEY = "kmz-HW";

class CounterForm extends Component {
  constructor(props) {
    super(props);

    this.updateName = this.updateName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log("CounterForm.constructor");
    this.state = {
      name: "Name Me",
      value: 0
    };
  }

  componentWillMount() {
    console.log("CounterForm.componentWillMount");
  }

  componentDidMount() {
    console.log("CounterForm.componentDidMount");

    this.getData("name");
    this.getData("value");
  }

  componentWillReceiveProps(nextProps) {
    console.log("CounterForm.componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("CounterForm.shouldComponentUpdate", nextProps, nextState);
    return true;
  }


  updateName(event) {
    console.log(
      "CounterForm.updateName",
      event.target.name,
      event.target.value
    );
    const name = event.target.name;
    const val = event.target.value;
    this.setState({ [name]: val });
  }

  updateValue(event) {
    console.log(
      "CounterForm.updateValue",
      event.target.name,
      event.target.value
    );
    const name = event.target.name;
    const val = parseInt(event.target.value, 10);
    this.setState({ [name]: val });
  }

  handleSubmit(event) {
    console.log("CounterForm.handleSubmit", event);
    this.saveData(KEY + "-name", this.state.name);
    this.saveData(KEY + "-value", this.state.value.toString());
  }

  getData(keyName) {
    console.log("fetching data...", keyName);
    const key = KEY + "-" + keyName;
    fetch("http://circuslabs.net:3000/data/" + key, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.text();
        }
        return "";
      })
      .then(data => {
        console.log("here is the response data for key:", keyName, data);
        let val = data;
        if (val) {
          if (keyName === "value") {
            val = parseInt(data, 10);
          }
          this.setState({ [keyName]: val });
        }
      })
      .catch(function(err) {
        console.log("error!", err);
      });
  }

  saveData(key, value) {
    console.log("saving data...", key, value);
    let jsonData = {
      type: "string",
      content: value
    };
    fetch("http://circuslabs.net:3000/data/" + key, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.text())
      .then(data => {
        console.log("here is the saved response data!", data);
      })
      .catch(function(err) {
        console.log("error!", err);
      });
  }

  render() {
    console.log("CounterForm.render");

    return (
      <div>
        <h2>Counter Form</h2>
        <hr />
        <div className="form">
          <div className="field">
            <label>
              <span>Name the counter</span>
              <input
                type="text"
                name="name"
                onChange={this.updateName}
                value={this.state.name}
              />
            </label>
          </div>
          <div className="field">
            <label>
              <span>Initial value for the counter</span>
              <input
                type="num"
                name="value"
                onChange={this.updateValue}
                value={this.state.value}
              />
            </label>
          </div>
          <div className="field">
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
        <hr />
        <Counter title={this.state.name} initialValue={this.state.value} />
      </div>
    );
  }
}

export default CounterForm;