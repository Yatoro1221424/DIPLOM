<template>
  <div>
    <CuratorListItem v-for="(item,i) in 7" :key="i"/>
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
</template>

<script>
import CuratorListItem from '../items/CuratorListItem.vue'
export default {
  components: { CuratorListItem },
    data () {
        return {
          page: 1,
        }
    },
}
</script>
