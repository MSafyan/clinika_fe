import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_FAIL,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_COUNT_SUCCESS,
  CUSTOMER_COUNT_FAIL,
  CUSTOMER_EDIT_SUCCESS,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_FIND_SUCCESS,
  CUSTOMER_FIND_FAIL,
	SET_LOADING_CUSTOMER,
  CUSTOMER_YEARLY_SUCCESS,
  CUSTOMER_YEARLY_FAIL,
  CUSTOMER_INFO_SUCCESS,
  CUSTOMER_INFO_FAIL,
  CUSTOMER_EMAIL_SUCCESS,
  NOT_LOADING_CUSTOMER
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

// const url = 'http://localhost:1337';
// const url = process.env.REACT_APP_BE_HOST_URL;

export const NEW_CUSTOMER = (form_data) => async (dispatch,getState) => {
	try {
    const {id} = getState().auth.user;
    dispatch({ type: SET_LOADING_CUSTOMER });
    const data={
      name:form_data.name || '',
      phoneNumber:form_data.phoneNumber || '',
      age:form_data.age || '',
      patientStatus:form_data.patientStatus || '',
      imei:form_data.imei || '',
      users_permissions_user:id
    };

		const res = await axios.post(`${url}/patients/`, data);

    console.log(res.data);
    if(res.data.msg==='exist'){
      toast.warn(res.data.message);
    }else{
      dispatch({ type: NEW_CUSTOMER_SUCCESS, payload: res.data });
      toast.success("patient successfully added...");
    }

	} catch (error) {

		dispatch({ type: NEW_CUSTOMER_FAIL});
    toast.warn('error while adding patient')
    
		// errMsg(error)
	}
};

export const CUSTOMER_EMAIL = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const data={
      email:form_data.email || '',
      body:form_data.text || '',
      contactNo1:form_data.contactNo1 || '',
      subject:"volante",
      method:form_data.method
    };

		await axios.post(`${url}/customers/email`, data);

    // console.log(res.data);

		dispatch({ type: CUSTOMER_EMAIL_SUCCESS});
		toast.success(`${form_data.method} is send...`);
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL});
		errMsg(error)
	}
};

export const NEW_EMAIL = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const data={
      subject:form_data.subject || '',
      body:form_data.body || '',
      method:form_data.method || 'email',
      customerType:form_data.customerType || 'both',
    };
    if(form_data.customerType==='loyalcustomer'){
      await axios.post(`${url}/customers/bulkEmail?loyalCustomer_eq=true`, data);
    }else{
      await axios.post(`${url}/customers/bulkEmail`, data);
    }

    // console.log(res.data);

		dispatch({ type: CUSTOMER_EMAIL_SUCCESS});
		toast.success("Notification is send...");
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL});
		errMsg(error)
	}
};

export const CUSTOMER_UPDATE = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const patientID = getState().customer.customer.id;

    const data={
      name:form_data.name || '',
      phoneNumber:form_data.phoneNumber || '',
      age:form_data.age || '',
      patientStatus:form_data.patientStatus || '',
      imei:form_data.imei || '',
    };

		const res = await axios.put(`${url}/patients/${patientID}`, data);
    dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: res.data });
    toast.success("Patient updated scuccessfully...");

  const {id} = getState().auth.user;


    const res1 = await axios.get(`${url}/patients?users_permissions_user_eq=${id}`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: res1.data });
  } catch (error) {

		dispatch({ type: CUSTOMER_UPDATE_FAIL});
		errMsg(error)
	}
};

export const CUSTOMER_LIST = () => async (dispatch,getState) => {
  const {id} = getState().auth.user;
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/patients?users_permissions_user_eq=${id}`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_LIST_FAIL});
		errMsg(error)
    
	}
};

export const CUSTOMER_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/patients/count`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_COUNT_FAIL});
		errMsg(error)
    
	}
};
export const CUSTOMER_INFO = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers/customerInfo`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_INFO_SUCCESS , payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL });
		errMsg(error)
    
	}
};
export const CUSTOMER_YEARLY = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers/customerYearly`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_YEARLY_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_YEARLY_FAIL});
		errMsg(error)
    
	}
};

export const DELETE = (delId) => async (dispatch,getState) => {
	try {
		console.log('delete')
    const {id} = getState().auth.user;

			await axios.delete(`${url}/patients/${delId}?`)
			toast.warn('patient deleted')

      const res = await axios.get(`${url}/patients?users_permissions_user_eq=${id}`);
      // console.log(res.data);
  
      dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: res.data });

	} catch (error) {
		errMsg(error);
	}
};

export const CUSTOMER_FIND = (form_data) => async (dispatch,getState) => {
  const {id} = getState().auth.user;
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    var res;
    // console.log(form_data)
    if(form_data.searchBy==='id'){
        res = await axios.get(`${url}/patients/${form_data.searchTerm}?users_permissions_user_eq=${id}`);
        dispatch({ type: CUSTOMER_FIND_SUCCESS, payload:[ res.data] });

      }
    else{
        res = await axios.get(`${url}/patients?${form_data.searchBy}_contains=${form_data.searchTerm}&&users_permissions_user_eq=${id}`);
        dispatch({ type: CUSTOMER_FIND_SUCCESS, payload: res.data });
      }
      // console.log(res);

	} catch (error) {
    const customerList=getState().customer.customerList;
    dispatch({ type: CUSTOMER_FIND_FAIL, payload: customerList });
		errMsg(error)
    
	}
};

export const CUSTOMER_EDIT = (form_data) => async (dispatch) => {
		dispatch({ type: CUSTOMER_EDIT_SUCCESS, payload: form_data });
};

export const NOTLOADING_CUSTOMER = () => async (dispatch) => {
  dispatch({ type: NOT_LOADING_CUSTOMER});
};