<template>
        <v-expansion-panels focusable>
            <v-expansion-panel v-for="session in getSessions" :key="session.id" :project="sessions">
            <v-expansion-panel-header expand-icon="mdi-menu-down">
                <h3>Место проведение: {{sessions.plase}}</h3>
                <v-spacer/>
                <p>Дата начала {{session.dateStart}} </p>
                <p>Дата конца {{session.dateEnd}}</p>
                <p>Статус {{sessions.status}}</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-list-item-content>
                <v-rov>
                    <v-col>
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            label="Дата начала и окончания"
                            prepend-icon="mdi-calendar"
                            readonly 
                            disabled
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker :landscape="true" color="blue-grey darken-2" locale="ru"  range > 
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                            Отколнить
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(date)">
                            Принять
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                    <v-text-field
                        label="Место проведение"
                        v-model="sessions.plase"
                        prepend-icon="mdi-bank-plus"
                        disabled
                        required
                    ></v-text-field>
                    <v-spacer/>
                    <v-textarea
                        label="Описание"
                        v-model="sessions.description"
                        outlined
                        disabled
                        prepend-icon="mdi-order-alphabetical-descending"
                    ></v-textarea>
                    <v-combobox
                        label="Проекты"
                        v-model="sessions.project"
                        disabled
                        prepend-icon="mdi-clipboard-list-outline"
                        clearable
                        multiple
                        outlined
                        small-chips
                    ></v-combobox>
                    </v-col>
                </v-rov>
                </v-list-item-content>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {

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
