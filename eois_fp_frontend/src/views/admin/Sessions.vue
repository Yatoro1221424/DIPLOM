<template>
    <div>
        <v-row>
            <v-col
                cols="12"
                sm="8"
                md="8"
            >
                <v-text-field outlined label="Поиск" required ></v-text-field>
            </v-col>
            <v-col
                cols="4"
                md="4"  
            >
                <v-combobox
                    label="Фильтрация"
                    clearable
                    multiple
                    outlined
                    small-chips
                ></v-combobox>
            </v-col>
        </v-row>
        <v-expansion-panels focusable>
            <v-expansion-panel v-for="sessions in getSessions" :key="sessions.id" :project="sessions">
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
        <v-btn depressed class="primary " to="/admin/sessions-create">
            Создать новую сессию
        </v-btn>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Sessions',
    computed: {
    ...mapGetters('common', ['getSessions'])
  },
  methods: {
    ...mapActions('common', ['fetchSessions'])
    },
  async mounted() {
    await this.fetchSessions() 
  }
}
</script>
