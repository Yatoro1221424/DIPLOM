<template>
  <v-expansion-panels popout>
    <v-expansion-panel
     v-for="(item,i) in 5" :key="i">
      <v-expansion-panel-header expand-icon="mdi-menu-down">
        <h3>ФИО участника</h3>
        <v-spacer/>
        <p class="yellow--text">На рассмотрении</p>
        <v-checkbox @click.stop=""/>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list-item-content>
          <p>Пол: мужской</p>
          <v-spacer/>
          <p>Дата рождения: 14.02.1991</p>
        </v-list-item-content>
        <v-divider></v-divider>
        <v-list-item-content>
          <p>ФИО родителя</p>
          <v-spacer/>
          <p>Email родителя</p>
          <v-spacer/>
          <p>телефон родителя</p>
        </v-list-item-content>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
    name: 'EntryList'
}
</script>
