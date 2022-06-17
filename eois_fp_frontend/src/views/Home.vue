<template>
<!-- "id": 1,
            "dateStart": "2021-11-09",
            "dateEnd": "2021-01-10",
            "place": "КрасЭйр",
            "description": "Двухнедельное погружение в программирование!!!",
            "fullDescription": null -->
  <v-container class="h-100">
    <h1>Главная страница</h1>
    <v-expansion-panels focusable>
          <v-expansion-panel v-for="sessions in getSessions" :key="sessions.id" :project="sessions">
          <v-expansion-panel-header expand-icon="mdi-menu-down">
              <h3>Место проведение: {{sessions.place}}</h3>
              <v-spacer/>
              <p>Дата начала: {{sessions.dateStart}} </p>
              <p>Дата конца: {{sessions.dateEnd}}</p>
              <p>Стоиморсть: {{sessions.dateEnd}}</p>
              <p>Статус {{sessions.status}}</p>
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
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('common', ['getSessions'])
  },
  methods: {
    ...mapActions('common', ['fetchSessions']),
    onClick() {
    this.$router.push('/entry')
    }
  },
  async mounted() {
    await this.fetchSessions() 
  },
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
