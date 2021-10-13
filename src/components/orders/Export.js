import React from 'react';
import { CSVLink } from "react-csv";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";

const headers = [
  { label: "Id", key: "id" },
  { label: "First Name", key: "customer.firstName" },
  { label: "Email", key: "customer.email" },
  { label: "Vehicle Reg No", key: "vehicle.vehicleRegNo" },
  { label: "Paid Amount", key: "paidAmount" },
  { label: "Status", key: "status" },
];
 
// const data = [
//   { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
//   { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
//   { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
//   { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
//   { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
//   { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
//   { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
//   { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
//   { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
//   { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
//   { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
// ];


function App({loading,orderList}) {
  const csvReport = {
    data: orderList,
    headers: headers,
    filename: 'Volante_Report.csv'
  };
  return (
    <div>
      <Button>
      <CSVLink {...csvReport}> Export to CSV</CSVLink>
      </Button>
    </div>
  );
}
 

const mapStateToProps = state => ({
  loading:state.order.loading,
  orderList:state.order.orderList
});

export default connect(
  mapStateToProps,
  null
)(App);
