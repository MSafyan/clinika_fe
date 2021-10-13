import axios,{url} from './customAxios';

import {
  NEW_VEHICLE_SUCCESS,
  NEW_VEHICLE_FAIL,
	SET_LOADING_VEHICLE,
  NOT_LOADING_VEHICLE,
} from './types';
import { toast } from "react-toastify";
import { errMsg } from './utils';

export const NEW_VEHICLE = (form_data) => async (dispatch,getState) => {
  try {

  dispatch({type:SET_LOADING_VEHICLE});
  // console.log('vehicel action')
      const {id} = getState().customer.customer;
      const data = { 
        vehicleMake:form_data.vehicleMake,
        vehicleRegNo: form_data.vehicleRegNo,
        vehicleModel: form_data.vehicleModel,
        customer:id
      };

      const res=await axios.post(`${url}/vehicles/`, data);

      // console.log(res.data);

      dispatch({ type: NEW_VEHICLE_SUCCESS, payload: res.data });
      toast.success("Vehicle successfully added...");
    } catch (error) {
      console.log(error);

      dispatch({ type: NEW_VEHICLE_FAIL});
      errMsg(error);

    }
};

export const VEHICLE_UPDATE = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({type:SET_LOADING_VEHICLE});
    console.log('vehicel action')
    const data = { 
      vehicleMake:form_data.vehicleMake,
      vehicleRegNo: form_data.vehicleRegNo,
      vehicleModel: form_data.vehicleModel,
    };

		const res = await axios.put(`${url}/vehicles/${form_data.id}`, data);

    console.error(res.data);
    dispatch({ type: NOT_LOADING_VEHICLE});
		toast.success("Vehicle updated scuccessfully...");
	} catch (error) {

    dispatch({ type: NEW_VEHICLE_FAIL});
		errMsg(error)
	}
};

export const NOTLOADING_VEHICLE = () => async (dispatch) => {
  dispatch({ type: NOT_LOADING_VEHICLE});
};