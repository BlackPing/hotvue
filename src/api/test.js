import axios from '../api/axios.js'

export function gets() {
	return axios.get('/API/auth/login/_test');
}