import React from 'react';
// import App from './App.js';

export default class CustomerTable extends React.Component {
        constructor() {
            super();
            this.state = {
                cols: [
                    {key: 'customerId', name: 'customerId', locked: true, width: 100},
                    {key: 'firstName', name: 'firstName', width: 200},
                    {key: 'lastName', name: 'lastName', width: 200},
                    {key: 'phoneNumber', name: 'phoneNumber', width: 200},
                    {key: 'email', name: 'email', width: 200},
                ],
                customers : //React.statics.getCustomers()
                // Real-world problem - don't get all the data. Resolve with data windowing
                    [
                    {customerId : 1, firstName : "Harry", lastName : "Potter", phoneNumber : "555-1212", email : "harry@hogwarts.ac.uk"},
                    {customerId : 2, firstName : "Ron", lastName : "Weaslehy", phoneNumber : "555-1212", email : "ron@hogwarts.ac.uk"},
                    {customerId : 3, firstName : "Hermione", lastName : "Granger", phoneNumber : "555-1212", email : "hermione@hogwarts.ac.uk"},
                    {customerId : 4, firstName : "Neville", lastName : "Longbottom", phoneNumber : "555-1212", email : "neville@hogwarts.ac.uk"}
                ]
            };
        }

    render() {
        return(
            <div>
                <div>Customer Table</div>
                <table>
                    <thead>
                    <tr>
                        {this.getTableHeadComponents()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.getTableRowComponents()}
                    </tbody>
                </table>
            </div>
        );
    }

    getTableHeadComponents() {
        return this.state.cols.map((col) => {
            return (<th key={'head' + col.name} style={{width: col.width}}>{col.name}</th>);
        });
    }

    getTableRowComponents() {
        return this.state.customers.map((customer) => {
            let tdComponents = this.state.cols.map((col) => {
                return (<td key={customer.customerId + col.name} style={{width: col.width}}>{customer[col.name]}</td>)
            });
            return (<tr key={'row' + customer.customerId}>{tdComponents}</tr>);
        });
    }





    // render() {
    //     return (
    //         <div>
    //             <div>Customer Table</div>
    //                 <table>
    //                     <tbody>
    //             {
    //                 this.customers.map((row, i) => {
    //                     return (
    //                         <tr key={i}>
    //                             <td>{this.customers[i].customerId}</td>
    //                             <td>{this.customers[i].firstName}</td>
    //                             <td>{this.customers[i].lastName}</td>
    //                             <td>{this.customers[i].phoneNumber}</td>
    //                             <td>{this.customers[i].email}</td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //                 </tbody>
    //             </table>
    //         </div>
    //     );
    // }

}
// import ReactDataGrid from 'react-data-grid';
//
// export default class CustomerTable extends React.Component {
//     constructor() {
//         super();
//         this.customers = [
//             {customerId : 1, firstName : "Harry", lastName : "Potter", phoneNumber : "555-1212", email : "harry@hogwarts.ac.uk"},
//             {customerId : 2, firstName : "Harry", lastName : "Potter", phoneNumber : "555-1212", email : "harry@hogwarts.ac.uk"},
//             {customerId : 3, firstName : "Harry", lastName : "Potter", phoneNumber : "555-1212", email : "harry@hogwarts.ac.uk"},
//             {customerId : 4, firstName : "Harry", lastName : "Potter", phoneNumber : "555-1212", email : "harry@hogwarts.ac.uk"}
//         ];
//
//         this.cols = [
//             { key:'customerId', name:'customerId', locked:true, width:100},
//             { key:'firstName', name:'firstName', width:200},
//             { key:'lastName', name:'lastName', width:200},
//             { key:'phoneNumber', name:'phoneNumber', width:200},
//             { key:'email', name:'email', width:200},
//         ];
//     }
//
//     rowGetter = function(i) {
//         return this.customers[i];
//     }
//
//
//     render() {
//         return (
//             <div>
//           <div>Customer Table</div>
//             <ReactDataGrid
//                 columns={this.cols}
//                 rowGetter={this.rowGetter}
//                 rowsCount={this.customers.length}
//             />
//                 </div>
//         );
//     }
//
// }