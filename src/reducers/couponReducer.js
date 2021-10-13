import {
  NEW_COUPON_SUCCESS,
  NEW_COUPON_FAIL,
	COUPON_LIST_SUCCESS,
	COUPON_LIST_FAIL,
	COUPON_COUNT_FAIL,
	COUPON_COUNT_SUCCESS,
	COUPON_EDIT_SUCCESS,
	COUPON_UPDATE_SUCCESS,
	COUPON_UPDATE_FAIL,
	SET_LOADING_COUPON,
	COUPON_FIND_FAIL,
	COUPON_FIND_SUCCESS
} from "../actions/types";

const INITAL_AUTH_STATE = {
	coupon: null,
	loading: false,
	couponList:[],
	count:10,
	edit:false
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case NEW_COUPON_SUCCESS:
		case COUPON_UPDATE_SUCCESS:
		case COUPON_FIND_SUCCESS:
			return {
				...state,
				loading: false,
				edit:false,
				coupon: action.payload,
			};
		case COUPON_LIST_SUCCESS:
			return {
				...state,
				loading:false,
				edit:false,
				couponList:action.payload
			};
		case COUPON_COUNT_SUCCESS:
			return {
				...state,
				loading:false,
				count:action.payload
			};
		case COUPON_EDIT_SUCCESS:
			return {
				...state,
				edit:true,
				coupon:action.payload
			}
		case NEW_COUPON_FAIL:
		case COUPON_LIST_FAIL:
		case COUPON_COUNT_FAIL:
		case COUPON_UPDATE_FAIL:
		case COUPON_FIND_FAIL:
			return {
				...state,
				loading: false,
			};
		case SET_LOADING_COUPON:
			return {
				...state,
				loading:true
			};
		default:
			return state;
	}
}

