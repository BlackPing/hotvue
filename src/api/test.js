import axios from '../api/axios.js'

export function gets() {
	return axios.get('/test');
}