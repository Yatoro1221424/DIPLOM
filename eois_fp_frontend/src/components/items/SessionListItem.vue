<template>
  <v-expansion-panels focusable>
    <v-expansion-panel> 
      <v-expansion-panel-header expand-icon="mdi-menu-down">
        <h3>Место проведение: {{sessions.place}}</h3>
        <v-spacer/>
        <p>Дата начала: {{sessions.dateStart}} </p>
        <p>Дата конца: {{sessions.dateEnd}}</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
              <v-list-item-content>
                <v-col>
                <v-text-field
                    label="Краткое описание"
                    v-model="sessions.description"
                    prepend-icon="mdi-order-alphabetical-descending"
                    outlined
                    readonly
                    required
                ></v-text-field>
                <v-spacer/>
                <v-textarea
                    label="Описание"
                    v-model="sessions.fullDescription"
                    outlined
                    readonly
                    prepend-icon="mdi-order-alphabetical-descending"
                ></v-textarea>
                <v-btn color="primary" @click="onClick">Подать заявку на сессию</v-btn>
                </v-col>
              </v-list-item-content>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, } from 'vuex'
export default {
  name: "SessionsEntryListItem",
  props: ['sessions'],
  methods: {
      ...mapActions('admin', ['fetchSessions', 'sendSession'])
  }
}
</script>
