import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerForm from './CustomerForm';
import CustomerTable from './CustomerTable';
import $ from 'jquery';

class App extends Component {
    constructor() {
        super();
        this.customers = [];
        this.init();
        // app = this;

    }

    init() {
        $.get("http://www.nextgened.com/weasley/customers.json", function(data) {
                    this.customers = data;
                console.log(this.customers);
        });
    }



    static getCustomers() {
        return this.customers;
    }

    static getCustomer(index) {
        return this.customers[index];
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div>
              <CustomerTable/>
          </div>
        <div className="App-intro">
          <CustomerForm />
        </div>
      </div>
    );
  }
}

React.statics = {
    getCustomers : App.getCustomers,
    getCustomer : App.getCustomer
}

export default App;
