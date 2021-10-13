import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_COUNT_SUCCESS,
  EMPLOYEE_COUNT_FAIL,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
	SET_LOADING_EMPLOYEE
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

export const EMPLOYEE_UPDATE = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });
    const {id} = getState().employee.employee;

    const data={
      type:form_data.type
    };
		const type = getState().auth.user.type;
		if(type==='admin'){
			const res = await axios.put(`${url}/users/${id}`, data);

			// console.log(res.data);
	
			dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: res.data });
			toast.success("EMPLOYEE updated scuccessfully...");
		}else{
			toast.warn('only Admin can perform this action...')
		}


	} catch (error) {

		dispatch({ type: EMPLOYEE_UPDATE_FAIL});
		errMsg(error)
	}
};

export const EMPLOYEE_LIST = (id) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });
		console.log(id);
		if(id){
			const res = await axios.get(`${url}/bloodpressures?patient_eq=${id}`);
			// console.log(res.data);
	
			dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: res.data });
		}else{
			return;
		}
	} catch (error) {

		dispatch({ type: EMPLOYEE_LIST_FAIL});
		errMsg(error)
    
	}
};

export const EMPLOYEE_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });

		const res = await axios.get(`${url}/bloodpressures/count`);
    // console.log(res.data);

		dispatch({ type: EMPLOYEE_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: EMPLOYEE_COUNT_FAIL});
		errMsg(error)
    
	}
};

export const EMPLOYEE_EDIT = (form_data) => async (dispatch) => {
		dispatch({ type: EMPLOYEE_EDIT_SUCCESS, payload: form_data });
};

