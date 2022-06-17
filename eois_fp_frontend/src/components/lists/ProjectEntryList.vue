<template>
    <div>
         <ProjectEntryListItem v-for="project in getProjects" :key="project.id" :project="project" />
    </div>
</template>
<script>
import ProjectEntryListItem from '../items/ProjectEntryListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name:"ProjectEntryList",
    components: {
        ProjectEntryListItem
    },
    computed: {
        ...mapGetters('admin', ['getProjects'])
    },
    methods: {
        ...mapActions('admin', ['fetchProjects'])
    },
    async mounted() {
        await this.fetchProjects() 
    }
}
</script>
