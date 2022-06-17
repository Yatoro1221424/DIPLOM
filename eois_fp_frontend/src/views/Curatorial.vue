<template>
    <v-container class="h-100">
        <h1>Кураторская</h1>
        <CuratorList/>
    </v-container>
</template>

<script>
import CuratorList from '../components/lists/CuratorList.vue'
export default {
  components: { CuratorList },
    name: 'Curatorial'    
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
