import customAxios from 'axios';
import { getJwt, setJwt } from './jwt';

// const url = process.env.REACT_APP_API_URL;
// const customAxios = axios.create({
// 	/* eslint-disable-next-line */
// 	// baseURL: process.env.REACT_APP_API_URL,
// 	baseURL: 'http://localhost:3001',
// });
// customAxios.defaults.baseURL = 'https://api.arcexpert.com/';
// customAxios.defaults.baseURL =
// 'http://storage-env.eba-p3zaykcj.us-east-1.elasticbeanstalk.com';

// customAxios.defaults.headers.common['Content-Type'] = 'application/json';
// customAxios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// customAxios.defaults.headers.put['Content-Type'] = 'multipart/form-data';
// customAxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const setAuthHeader = (token) => {
	customAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	setJwt(token);
};
if (getJwt()) {
	setAuthHeader(getJwt());
}

// customAxios.interceptors.response.use(response => {
//   if (response.config) console.info(`[AXIOS]:${response.config.method.toUpperCase()}:${response.config.url}`, {config: response.config, data: response.data});
//   return { ok: true, status: response.status, data: (response || {}).data }
// }, error => {
//   return { ok: false, error, errMessage: error.response.statusText, data: (error.response || {}).data }
// });
// export const url='http://volantestrapi-env.eba-kzqbnykc.us-east-1.elasticbeanstalk.com';
// export const url='http://localhost:1337';
export const url='https://clinika2.herokuapp.com';

export { setAuthHeader };

// // customAxios.origin = axios;
export default customAxios;