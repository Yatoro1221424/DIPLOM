<template>
    <v-container class="h-100">
        <EntryForm :radios="radios" />
        <v-radio-group
            v-model="radios"
            row
        >
            <v-radio
                label="Участник"
                :value="true"
            ></v-radio>
            <v-radio
                label="Куратор"
                :value="false"
            ></v-radio>
        </v-radio-group>
    </v-container >
</template>

<script>
import EntryForm from '../components/forms/EntryForm.vue'
export default {
    name: 'Entry',
    components: {
        EntryForm
    },
    data: () => ({
        radios: true
    }),
}
</script>
<style scoped>
.h-100 {
  height: 100%;
}
</style>
