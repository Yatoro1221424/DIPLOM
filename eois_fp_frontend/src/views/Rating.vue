<template>
    <v-container class="h-100">
        <RatingForm />
    </v-container>
</template>

<script>
import RatingForm from '../components/forms/RatingForm.vue'
export default {
  components: { RatingForm },
    name: 'Rating'    
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
