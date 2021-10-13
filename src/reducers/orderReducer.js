import {
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAIL,
	ORDER_COUNT_FAIL,
	ORDER_COUNT_SUCCESS,
	ORDER_REVENUE_SUCCESS,
	ORDER_REVENUE_FAIL,
	SET_LOADING_ORDER,
	NOT_LOADING_ORDER,
	ORDER_FEATURED_FAIL,
	ORDER_FEATURED_SUCCESS,
	ORDER_FIND_SUCCESS,
	ORDER_FIND_FAIL,
	ORDER_UPDATE_SUCCESS,
	ORDER_UPDATE_FAIL
} from "../actions/types";

const INITAL_AUTH_STATE = {
	order: null,
	loading: false,
	orderList:[],
	count:10,
	edit:false,
	revenueData:null,
	featuredData:null
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case NEW_ORDER_SUCCESS:
		case ORDER_UPDATE_SUCCESS:
			return {
				...state,
				loading: false,
				edit:false,
				order: action.payload,
			};
		case ORDER_LIST_SUCCESS:
		case ORDER_FIND_SUCCESS:
			return {
				...state,
				loading:false,
				edit:false,
				orderList:action.payload
			};
		case ORDER_COUNT_SUCCESS:
			return {
				...state,
				loading:false,
				count:action.payload
			};
		case ORDER_REVENUE_SUCCESS:
			return {
				...state,
				loading:false,
				revenueData:action.payload
			}
		case ORDER_FEATURED_SUCCESS:
			return {
				...state,
				loading:false,
				featuredData:action.payload
			}
		case NEW_ORDER_FAIL:
		case ORDER_LIST_FAIL:
		case ORDER_COUNT_FAIL:
		case ORDER_REVENUE_FAIL:
		case ORDER_FEATURED_FAIL:
		case ORDER_FIND_FAIL:
		case ORDER_UPDATE_FAIL:
		case NOT_LOADING_ORDER:
			return {
				...state,
				loading: false,
			};
		case SET_LOADING_ORDER:
			return {
				...state,
				loading:true
			};
		default:
			return state;
	}
}

