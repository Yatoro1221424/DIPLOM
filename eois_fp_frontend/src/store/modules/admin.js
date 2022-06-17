import AdminService from '../../services/admin.service'

export default {
	namespaced: true,
	state: {
		sessions: [],
		session: null,
        projects: [],
		project: null,
		curators: [],
		curator: null,
    },
	actions: {
		async fetchProjects({ commit }) {
            const response = await AdminService.fetchProjects()
            commit('setProjects', response.data.result)
        },
		async sendProject({ commit }, form) {
			const response = await AdminService.sendProject(form)
			commit('setProject', response.data.result)
		},
		async updataProject({ commit }, form) {
			const response = await AdminService.updataProject(form)
			commit('setProject', response.data.result)
		},
		async fetchSessions({ commit }) {
			const response = await AdminService.fetchSessions()
			commit('setSessions', response.data.result)
		},
		async sendSession({ commit }, form) {
			const response = await AdminService.sendSession(form)
			commit('setSessions', response.data.result)
		},
		async updataSession({ commit }, form) {
			const response = await AdminService.updataSession(form)
			commit('setSessions', response.data.result)
		},
		async fetchCurator({ commit }) {
			const response = await AdminService.fetchCurator()
			commit('setCurator', response.data.result)
		}
	},
	mutations: {
		setSession(state, session){
			state.session = session
		},
		setCurators(state, curators) {
			state.curators = curators
		},
		setProjects(state, projects) {
			state.projects = projects
		},
		setProject(state, project) {
			state.project = project
		},
		setSessions(state, sessions) {
			state.sessions = sessions
		},
		setCurator(state, curator) {
			state.curator = curator
		}
	},
	getters: {
		getSessions(state){
			return state.sessions
		},
		detSession(state){
			return state.session
		},
		getProjects(state) {
			return state.projects
		},
		getProject(state) {
			return state.project
		},
		getCurators(state){
			return state.curators
		},
		getCurator(state){
			return state.curator
		}
	}
}
