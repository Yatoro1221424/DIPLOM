<template>
  <div>
     <UserHistoreListItem v-for="(item,i) in 4" :key="i"/><!-- -->
  </div>
</template>

<script>
import UserHistoreListItem from '../items/UserHistoreListItem.vue'
export default {
  components: { UserHistoreListItem },
    data () {
        return {
          page: 1,
        }
    },
}
</script>
