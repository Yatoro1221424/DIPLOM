import api from './api'

class AdminService {
    async fetchProjects() {
		return await api.get('admin/projects')
	}

    async sendProject(form) {
        return await api.post('admin/project', form)
    }

    async updataProject(form) {
        return await api.put('admin/project', form)
    }

    async fetchSessions() {
		return await api.get('admin/session')
	}

    async sendSession(form) {
        return await api.post('admin/session', form)
    }

    async updataSession(form) {
        return await api.put('admin/session', form)
    }
    async fetchCurator() {
        return await api.get('admin/curator-entries')
    }

    async sendCurator(form) {
        return await api.post('admin/curator-entries', form)
    }
}

export default new AdminService()