import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

// import Register from './pages/auth/Register';
import Login from './pages/auth/LogIn';
// import dashboard from './pages/dashboard';
// import Forgot from './pages/auth/Forgot';
// import Reset from './pages/auth/Reset';

import Employees from './pages/employee/Employees';
import EmployeeForm from './pages/employee/EmployeeForm';
import Customers from './pages/customer/CustomerList';
import NewCustomer from './pages/customer/NewCustomer';
// import NewVehicle from './components/customers/newVehicle'
// import NewCoupon from './pages/invoice/couponForm'
// import Coupons from './pages/invoice/coupons'
// import NewEmail from './pages/email/emailForm'
import Test from './pages/test';

// import Order from './pages/order'
// import Orders from './pages/order/Orders';

// import Test from './pages/test'

import PrivateRoute from './components/routing/PrivateRoute';
import theme from './theme';
// import history from './store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store';
import { Provider } from 'react-redux';
import {persistor,store} from './store'

function App() {
	return (
		<div className='App'>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
        <PersistGate persistor={persistor} />
          <Switch>
            <PrivateRoute exact path='/' component={Customers}></PrivateRoute>
            <Route exact path='/login' component={Login}></Route>
            {/* <Route exact path='/register' component={Register}></Route>
            <Route exact path='/forgot' component={Forgot}></Route>
            <Route exact path='/reset' component={Reset}></Route> */}
            <Route exact path='/test' component={Test}></Route>

            {/* <PrivateRoute exact path='/neworder' component={Order}></PrivateRoute>
            <PrivateRoute exact path='/orders' component={Orders}></PrivateRoute> */}

            <PrivateRoute exact path='/employees' component={Employees}></PrivateRoute>
            <PrivateRoute exact path='/employeesform' component={EmployeeForm}></PrivateRoute>

            <PrivateRoute exact path='/customers' component={Customers}></PrivateRoute>
            <PrivateRoute exact path='/newcustomer' component={NewCustomer}></PrivateRoute>
            {/* <PrivateRoute exact path='/newvehicle' component={NewVehicle}></PrivateRoute>
            <PrivateRoute exact path='/newcoupon' component={NewCoupon}></PrivateRoute>
            <PrivateRoute exact path='/coupons' component={Coupons}></PrivateRoute>
            <PrivateRoute exact path='/newemail' component={NewEmail}></PrivateRoute> */}
          </Switch>
        </Router>
        </ThemeProvider>
      </Provider>
      <ToastContainer autoClose={4000} />
		</div>
	);
}

export default App;