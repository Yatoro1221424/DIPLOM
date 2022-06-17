<template>
  <v-container class="h-100">
    <LoginForm/>
  </v-container>
</template>

<script>
import LoginForm from '../components/forms/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
