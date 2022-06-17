import axios from 'axios'
import config from '../config'

const instance = axios.create({
	baseURL: `${config.API_HOST}/api/v1`,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
