<template>
    <v-form>
        <v-row>
            <v-col cols="12">
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
                            v-model="dateRangeText"
                            label="Дата начала и окончания"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker 
                        v-model="dates" 
                        :landscape="true" 
                        color="blue-grey darken-2" 
                        locale="ru" 
                        range > 
                            <v-spacer></v-spacer>
                            <v-btn text color="error" @click="menu = false">
                                Отколнить
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(date)">
                                Принять
                            </v-btn>
                    </v-date-picker>
                </v-menu>
                <v-text-field
                    v-model="form.place"
                    label="Место проведение"
                    prepend-icon="mdi-bank-plus"
                ></v-text-field>
                <v-text-field
                    v-model="form.description"
                    label="Краткое описание"
                    prepend-icon="mdi-order-alphabetical-descending"
                ></v-text-field>
                <v-textarea
                    outlined
                    v-model="form.fullDescription"
                    label="Полное описание"
                    prepend-icon="mdi-order-alphabetical-descending"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                cols="auto"
            >
                <v-btn
                    class="primary"
                    to="/admin/sessions"
                >
                    <v-icon
                        dark
                        left
                    >
                        mdi-arrow-left-circle
                    </v-icon>
                        Назад
                </v-btn>
            </v-col>
            <v-spacer/>
            <v-col 
            cols="auto"
            lg="1.5"
            >
                <v-btn 
                    class="primary" 
                    
                    @click="createSession"
                >
                    Создать
                    <v-icon
                        dark
                        right
                    >
                        mdi-plus-circle-outline
                    </v-icon> 
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'SessionForm',
     data: () => ({
        dates: [],
        form: {
            dateStart: "",
            dateEnd: "",
            place: "",
            description: "",
            fullDescription: ""
        },
        menu: false,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),
    computed: {
        dateRangeText () {
            return this.dates.map(n => new Date(n).toLocaleDateString()).sort( (a, b) => {new Date(b) - new Date(a) } ).join('~')
        },

    },
    methods: {
        ...mapActions('admin', ['sendSession']),
        async createSession() {
            this.form.dateStart = this.dates[0]
            this.form.dateEnd = this.dates[1]
            alert(JSON.stringify(this.form))
            await this.sendSession(this.form)
        }
    }
}
</script>
