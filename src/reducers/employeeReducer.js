import {
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
	EMPLOYEE_COUNT_FAIL,
	EMPLOYEE_COUNT_SUCCESS,
	EMPLOYEE_EDIT_SUCCESS,
	EMPLOYEE_UPDATE_SUCCESS,
	EMPLOYEE_UPDATE_FAIL,
	SET_LOADING_EMPLOYEE
} from "../actions/types";

const INITAL_AUTH_STATE = {
	employee: null,
	loading: false,
	employeeList:[],
	count:10,
	edit:false
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case EMPLOYEE_UPDATE_SUCCESS:
			return {
				...state,
				loading: false,
				edit:false,
				employee: action.payload,
			};
      case EMPLOYEE_LIST_SUCCESS:
        return {
          ...state,
          loading:false,
          edit:false,
          employeeList:action.payload
        };
		case EMPLOYEE_COUNT_SUCCESS:
			return {
				...state,
				loading:false,
				count:action.payload
			};
		case EMPLOYEE_EDIT_SUCCESS:
			return {
				...state,
				edit:true,
				employee:action.payload
			}
		case EMPLOYEE_LIST_FAIL:
		case EMPLOYEE_COUNT_FAIL:
		case EMPLOYEE_UPDATE_FAIL:
			return {
				...state,
				loading: false,
			};
		case SET_LOADING_EMPLOYEE:
			return {
				...state,
				loading:true
			};
		default:
			return state;
	}
}

