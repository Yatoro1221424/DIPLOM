<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="8">
        <v-text-field 
          outlined 
          label="Поиск" 
          required 
        ></v-text-field>
      </v-col>
      <v-col
        cols="4"
        md="4">
        <v-combobox
          label="Фильтрация"
          clearable
          multiple
          outlined
          small-chips
        ></v-combobox>
      </v-col>
    </v-row>
    <CuratorEntreisList/>
  </v-form>
</template>

<script>
import CuratorEntreisList from '../lists/CuratorEntreisList.vue'
export default {
  components: { CuratorEntreisList },
}
</script>
