import PublicService from '../../services/public.service'

export default {
	namespaced: true,
	state: {
		sessions: [],
		session: null,
		participantId: 0,

    },
	actions: {
		async fetchSessions({ commit }) {
			const response = await PublicService.fetchSessions()
			commit('setSessions', response.data.result)
		},
		async createEntry({ commit }, form)  {
			const response = await PublicService.createEntry(form)
			commit('setParticipant', response.data.result)
		}
		
	},
	mutations: {
		setSessions(state, sessions) {
			state.sessions = sessions
		},
		setParticipant(state, participantId) {
			state.participantId = participantId
		}
	},
	getters: {
		getSessions(state) {
			return state.sessions
		},
	}
}
