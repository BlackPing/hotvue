import axios from '../api/axios.js'

export function gets() {
	return axios.post('/API/auth/login/_test');
}