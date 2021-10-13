import axios,{url} from './customAxios';
import moment from 'moment';
import {
  NEW_COUPON_SUCCESS,
  NEW_COUPON_FAIL,
  COUPON_LIST_SUCCESS,
  COUPON_LIST_FAIL,
  COUPON_COUNT_SUCCESS,
  COUPON_COUNT_FAIL,
  // COUPON_EDIT_SUCCESS,
  // COUPON_UPDATE_SUCCESS,
  // COUPON_UPDATE_FAIL,
  // COUPON_FIND_SUCCESS,
  // COUPON_FIND_FAIL,
	SET_LOADING_COUPON
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

export const NEW_COUPON = (form_data,getState) => async (dispatch,getState) => {
	try {
    const type = getState().auth.user.type;
    console.log(type)
    if(type==='admin'){
      dispatch({ type: SET_LOADING_COUPON });
      const data={
        serviceName:form_data.serviceName || [],
        percent:form_data.percent || '',
        expiryDate:form_data.expiryDate || '',
        orderAmount:form_data.orderAmount || '',
        name:form_data.name || '',
        loyaltyOnly:form_data.loyaltyOnly,
        coupon:form_data.coupon,
      };
  
  
      const res = await axios.post(`${url}/loyalcards`, data);
      console.log(res.data);
      dispatch({ type: NEW_COUPON_SUCCESS, payload: res.data });
      toast.success("COUPON successfully added...");
    }else {
			toast.warn('only Admin can perform this action...')
    }
	} catch (error) {

		dispatch({ type: NEW_COUPON_FAIL});
		errMsg(error)
	}
};

// export const COUPON_UPDATE = (form_data) => async (dispatch,getState) => {
// 	try {
//     dispatch({ type: SET_LOADING_COUPON });
//     const {id} = getState().COUPON.COUPON;

//     const data={
//       firstName:form_data.firstName || '',
//       lastName:form_data.lastName || '',
//       address:form_data.address || '',
//       email:form_data.email || '',
//       state:form_data.state || '',
//       contactNo1:form_data.contactNo1 || '',
//       contactNo2:form_data.contactNo2 || '',
//       DOB:form_data.DOB || ''
//     };

// 		const res = await axios.put(`${url}/COUPONs/${id}`, data);

//     console.log(res.data);

// 		dispatch({ type: COUPON_UPDATE_SUCCESS, payload: res.data });
// 		toast.success("COUPON updated scuccessfully...");
// 	} catch (error) {

// 		dispatch({ type: COUPON_UPDATE_FAIL});
// 		errMsg(error)
// 	}
// };

export const COUPON_LIST = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_COUPON });
    const today=moment().format('YYYY-MM-DD');
		const res = await axios.get(`${url}/loyalcards?expiryDate_gte=${today}`);
    // console.log(res.data);

		dispatch({ type: COUPON_LIST_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: COUPON_LIST_FAIL});
		errMsg(error)
    
	}
};

export const COUPON_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_COUPON });

		const res = await axios.get(`${url}/coupons/count`);
    console.log(res.data);

		dispatch({ type: COUPON_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: COUPON_COUNT_FAIL});
		errMsg(error)
    
	}
};

// export const COUPON_FIND = (form_data) => async (dispatch) => {
// 	try {
//     dispatch({ type: SET_LOADING_COUPON });
//     var res;
//     console.log(form_data)
//     if(form_data.searchBy==='id'){
//         res = await axios.get(`${url}/COUPONs/${form_data.searchTerm}`);
//         dispatch({ type: COUPON_FIND_SUCCESS, payload: res.data });

//       }
//       else if(form_data.searchBy==='vehicleRegNo'){
//         res = await axios.get(`${url}/vehicles?${form_data.searchBy}=${form_data.searchTerm}`);
//         const vehiCOUPON=res.data[0];
//         const COUPON=vehiCOUPON.COUPON;
//         delete vehiCOUPON.COUPON;
    
//         COUPON.vehicles=[];
//         COUPON.vehicles.push(vehiCOUPON);
    
//         dispatch({ type: COUPON_FIND_SUCCESS, payload: COUPON });
//         }
//     else if(form_data.searchBy=== 'name' || 'email' || 'contactNo'){
//         res = await axios.get(`${url}/COUPONs?${form_data.searchBy}_eq=${form_data.searchTerm}`);
//         dispatch({ type: COUPON_FIND_SUCCESS, payload: res.data[0] });
//       }
//       console.log(res);

// 	} catch (error) {

// 		dispatch({ type: COUPON_FIND_FAIL});
//     console.log(error.response);
// 		// errMsg(error)
    
// 	}
// };

// export const COUPON_EDIT = (form_data) => async (dispatch) => {
// 		dispatch({ type: COUPON_EDIT_SUCCESS, payload: form_data });
// };

