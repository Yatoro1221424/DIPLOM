<template>
    <div>
        <SessionListItem v-for="sessions in getSessions" :key="sessions.id" :session="sessions"/>
    </div>
</template>
<script>
import SessionListItem from '../items/SessionListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        SessionListItem
    },
    computed: {
        ...mapGetters('admin', ['getSessions'])
    },
    methods: {
        ...mapActions('admin', ['fetchSessions'])
    },
    async mounted() {
        await this.fetchSessions() 
    }
}
</script>