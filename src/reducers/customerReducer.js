import {
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_FAIL,
	CUSTOMER_LIST_SUCCESS,
	CUSTOMER_LIST_FAIL,
	CUSTOMER_COUNT_FAIL,
	CUSTOMER_COUNT_SUCCESS,
	CUSTOMER_EDIT_SUCCESS,
	CUSTOMER_UPDATE_SUCCESS,
	CUSTOMER_UPDATE_FAIL,
	SET_LOADING_CUSTOMER,
	CUSTOMER_FIND_FAIL,
	CUSTOMER_FIND_SUCCESS,
	CUSTOMER_INFO_FAIL,
	CUSTOMER_INFO_SUCCESS,
	CUSTOMER_YEARLY_FAIL,
	CUSTOMER_YEARLY_SUCCESS,
	CUSTOMER_EMAIL_SUCCESS,
	NOT_LOADING_CUSTOMER,
	CUSTOMER_EDIT_CLEAR
} from "../actions/types";

const INITAL_AUTH_STATE = {
	customer: null,
	loading: false,
	customerList:[],
	count:10,
	edit:false,
	customerInfo:{},
	customerYearly:null,
	success:false,
	redirect:''
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case NEW_CUSTOMER_SUCCESS:
			return {
				...state,
				loading: false,
				success:true,
				customer: action.payload,
			};
		case CUSTOMER_UPDATE_SUCCESS:
			return {
				...state,
				loading: false,
				customer: action.payload,
			};
		case CUSTOMER_LIST_SUCCESS:
		case CUSTOMER_FIND_SUCCESS:
		case CUSTOMER_FIND_FAIL:
			return {
				...state,
				loading:false,
				edit:false,
				customerList:action.payload
			};
		case CUSTOMER_COUNT_SUCCESS:
			return {
				...state,
				loading:false,
				count:action.payload
			};
		case CUSTOMER_INFO_SUCCESS:
			return {
				...state,
				loading:false,
				customerInfo:action.payload
			};
		case CUSTOMER_YEARLY_SUCCESS:
			return {
				...state,
				loading:false,
				customerYearly:action.payload
			};
		case CUSTOMER_EDIT_SUCCESS:
			return {
				...state,
				edit:true,
				customer:action.payload
			}
		case NOT_LOADING_CUSTOMER:
			return {
				...state,
				edit:false,
				loading:false
			};
		case NEW_CUSTOMER_FAIL:
			return {
				...state,
				loading:false,
				failure:true,
			}
		case CUSTOMER_LIST_FAIL:
		case CUSTOMER_COUNT_FAIL:
		case CUSTOMER_UPDATE_FAIL:
		case CUSTOMER_YEARLY_FAIL:
		case CUSTOMER_INFO_FAIL:
		case CUSTOMER_EMAIL_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case SET_LOADING_CUSTOMER:
			return {
				...state,
				loading:true
			};
		default:
			return state;
	}
}

