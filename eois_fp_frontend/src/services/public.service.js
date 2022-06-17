import api from './api'

class PublicService {
    async fetchSessions() {
		return await api.get('public/sessions')
	}

    async createEntry(form) {
        return await api.post('public/entry', form)
    }

    fetchEntries() {

    }
}

export default new PublicService()
