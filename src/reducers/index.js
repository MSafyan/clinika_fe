import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import customerReducer from './customerReducer';
import vehicleReducer from './vehicleReducer'
import employeeReducer from './employeeReducer'
import orderReducer from './orderReducer'
import couponReducer from './couponReducer'

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer= combineReducers({
  auth: authReducer,
  customer:customerReducer,
  vehicle:vehicleReducer,
  employee:employeeReducer,
  order:orderReducer,
  coupon:couponReducer
});

export default persistReducer(persistConfig, rootReducer);