import React from 'react';

export default class CustomerForm extends React.Component {
    constructor() {
        super();
        this.state = {
            mode : 'VIEW',
            // customer : new Customer(),
            value : {
                customerId : -1,
                firstName : "",
                lastName : "",
                phoneNumber : "",
                email : ""
            }
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }
    render() {
        return (
          <div>
                  Customer Id: <input type="number" name="customerId" value={this.state.value.customerId}
                                      onChange={this.handleChangeEvent}/><br/>
                  First Name: <input type="text" name="firstName" value={this.state.value.firstName}
                                     onChange={this.handleChangeEvent}/><br/>
                  Last Name: <input type="text" name="lastName" value={this.state.value.lastName}
                                    onChange={this.handleChangeEvent}/><br/>
                  Phone Number: <input type="text" name="phoneNumber" value={this.state.value.phoneNumber}
                                       onChange={this.handleChangeEvent}/><br/>
                  Email: <input type="email" name="email" value={this.state.value.email}
                                onChange={this.handleChangeEvent} /><br/>
                  <button onClick={() => this.addContact()}>Add Contact</button>
          </div>
        );
    }
    // handleChange(form) {
    //     console.log(form);
    // }
    handleChangeEvent(evt) {
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        // this.state.value[evt.target.name] = evt.target.value;
        //console.log("this: " + this);
        var field = evt.target.name;
        // Copy the original value, graft on the field we're changing, produce a new object
        var newValue = Object.assign({}, this.state.value);
        newValue[field] = evt.target.value;
        this.setState(
            // Copy the original state, graft on the embedded object (value)
            Object.assign(
                this.state,
                {
                    value : newValue
                }
            )
        );
    }
    addContact() {
        console.log("Adding Customer");
        console.log(this.state.value);
    }
}



