import axios, { setAuthHeader,url } from './customAxios';
// axios.defaults.withCredentials = true;
import { clearJwt } from './jwt';
import {errMsg} from './utils';

import {
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAIL,
	// FORGOT_PASSWORD_SUCCESS,
	// FORGOT_PASSWORD_FAIL,
	// RESET_PASSWORD_SUCCESS,
	// RESET_PASSWORD_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	SET_LOADING_AUTH,
	NOT_LOADING_AUTH
} from './types';
import { toast } from "react-toastify";

// const url = 'http://localhost:1337';
// const url = process.env.REACT_APP_BE_HOST_URL;

export const SIGN_UP = (form_data) => async (dispatch) => {
	try {
		dispatch({type:SET_LOADING_AUTH})

		delete axios.defaults.headers.common["Authorization"];
		const res = await axios.post(`${url}/auth/local/register`, form_data);
		setAuthHeader(res.data.jwt);
		dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.user });
		toast.success("User successfully created...");

	} catch (error) {

		dispatch({ type: SIGN_UP_FAIL});
		errMsg(error);
	}
};

export const SIGN_IN = (form_data) => async (
	dispatch
) => {
	try {
	dispatch({type:SET_LOADING_AUTH})

	delete axios.defaults.headers.common["Authorization"];
	
		const res = await axios.post(`${url}/auth/local`, form_data);
		if(res.data.user.type!=='none'){
			setAuthHeader(res.data.jwt);
			dispatch({ type: SIGN_IN_SUCCESS, payload: res.data.user });
			toast.success("User successfully Logged In...");
		}else{
			dispatch({type:NOT_LOADING_AUTH})
			toast.success("You are not recognized employee of valante");

		}

	} catch (error) {
		dispatch({ type: SIGN_IN_FAIL });

		errMsg(error);

	}
};

export const FORGOT_PASSWORD = (form_data) => async (
	dispatch
) => {
	try {
		dispatch({type:SET_LOADING_AUTH})
		delete axios.defaults.headers.common["Authorization"];

		const res = await axios.post(
			`${url}/auth/forgot-password`,
			form_data
		);
		console.error(res);
		// dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
		toast('Email sent,check your Inbox...')
		dispatch({type:NOT_LOADING_AUTH})
		// console.log(res);

	} catch (error) {
		// console.log(error.response);
		// dispatch({
		// 	type: FORGOT_PASSWORD_FAIL,
		// 	payload: error.response.data.message,
		// });
		dispatch({type:NOT_LOADING_AUTH})
		errMsg(error);

	}
};

export const RESET_PASSWORD = (form_data) => async (
	dispatch
) => {
	try {
		delete axios.defaults.headers.common["Authorization"];

		dispatch({type:SET_LOADING_AUTH})
		// console.log(form_data);
		const 
		{ password, passwordConfirmation, code } = form_data;
		const res = await axios.post(
			`${url}/auth/reset-password`,
			{code,
			password,
			passwordConfirmation}
		);
		console.error(res);
		toast('Password updated successfully...Login Now')
		dispatch({type:NOT_LOADING_AUTH})

	} catch (error) {
		dispatch({type:NOT_LOADING_AUTH})
		errMsg(error);
	}
};

export const LOGOUT = () => async (dispatch) => {
	try {
		console.log('logout')
		dispatch({ type: LOGOUT_SUCCESS });
		clearJwt();
		toast.warn('logged out...')
	} catch (error) {
		dispatch({ type: LOGOUT_FAIL});
	}
};
export const DELETE = (id) => async (dispatch,getState) => {
	try {
		console.log('delete')
		const type = getState().auth.user.type;
		if(type==='admin'){
			await axios.delete(`${url}/users/${id}`)
			toast.warn('user deleted')
		}else{
			toast.warn('only Admin can perform this action...')
		}
	} catch (error) {
		errMsg(error);
	}
};

export const UNSET_LOADING = () => async (dispatch) => {
		dispatch({ type: NOT_LOADING_AUTH });
};

