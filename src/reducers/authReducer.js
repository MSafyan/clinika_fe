import {
	SIGN_UP_SUCCESS,
	SIGN_UP_FAIL,
	SIGN_IN_SUCCESS,
	LOGOUT_SUCCESS,
	SET_LOADING_AUTH,
	NOT_LOADING_AUTH,
	SIGN_IN_FAIL,
	REDIRECT_SUCCESS
} from "../actions/types";

const INITAL_AUTH_STATE = {
	token: localStorage.getItem("token"),
	user: null,
	isAuthenticated: false,
	loading: false,
	error: null,
	alert: null,
	redirect:null
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case SIGN_UP_SUCCESS:
		case SIGN_IN_SUCCESS:
			return {
				...state,
				loading:false,
				user: action.payload,
				isAuthenticated: true,
				redirect:null
			};
		case SIGN_UP_FAIL:
		case SIGN_IN_FAIL:
		case LOGOUT_SUCCESS:
		case REDIRECT_SUCCESS:
			return {
				...state,
				loading:false,
				user: null,
				isAuthenticated: false,
				token: null,
				redirect:null
			};
		case SET_LOADING_AUTH:
			return {
				...state,
				loading:true
			};
		case NOT_LOADING_AUTH:
			return {
				...state,
				loading:false
			};
		default:
			return state;
	}
}

