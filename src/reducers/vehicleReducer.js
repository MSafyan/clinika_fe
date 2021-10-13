import {
  NEW_VEHICLE_SUCCESS,
  NEW_VEHICLE_FAIL,
	SET_LOADING_VEHICLE,
	NOT_LOADING_VEHICLE
} from "../actions/types";

const INITAL_AUTH_STATE = {
	vehicle: null,
	loading: false,
};

export default function vehicleReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case NEW_VEHICLE_SUCCESS:
			return {
				...state,
				loading:false,
				vehicle: action.payload,
			};
		case NEW_VEHICLE_FAIL:
			return {
				...state,
				loading: false,
			};
			case SET_LOADING_VEHICLE:
				return {
					...state,
					loading:true
				};
			case NOT_LOADING_VEHICLE:
				return {
					...state,
					loading:false
				}
		default:
			return state;
	}
}

