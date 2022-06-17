<template>
    <v-container class="h-100">
        <UserPersonalArea/>
    </v-container>
</template>

<script>
import UserPersonalArea from '../../components/forms/UserPersonalAreaForm.vue'
export default {
  components: { UserPersonalArea },
    name: 'Profile'    
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
