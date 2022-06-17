import api from './api'
import TokenService from './token.service'

class AuthService {
	login({ email, password }) {
		return api.post('auth/signin', { email, password })
		.then((response) => {
			if (response.data.result.accessToken) {
				TokenService.setUser(response.data.result)
			}

			return response.data
		})
	}

	logout() {
		TokenService.removeUser()
	}

	register({ email, password }) {
		return api.post('auth/signup', {
			email,
			password
		})
	}
}

export default new AuthService()
