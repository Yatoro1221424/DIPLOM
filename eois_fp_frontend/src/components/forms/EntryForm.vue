<template>
     <v-form class="d-flex flex-column align-center" ><!--@submit.prevent="onSubmit" -->
       <v-row v-if="radios == true" justify="space-around" >
            <v-col >
                <h3>Данные участника</h3>
                <v-text-field
                    v-model="form.participantEmail"
                    label="Email участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantSurname"
                    label="Фамилия участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantName"
                    label="Имя участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantPatronymic"
                    label="Отчество участника"
                    required
                ></v-text-field>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="localeBirthday"
                            label="Дата рождения участника"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="form.participantBirthday"
                        @input="menu = false"
                        locale="ru"
                    ></v-date-picker>
                </v-menu>
                <v-radio-group
                    label="Пол участника: "
                    v-model="form.participantGender"
                    row
                >
                    <v-radio
                        label="Мужской"
                        value="male"
                    ></v-radio>
                    <v-radio
                        label="Женский"
                        value="female"
                    ></v-radio>
                </v-radio-group>
            </v-col>
            <v-col >
                <h3>Данные родителя</h3>
                <v-text-field
                    v-model="form.parentSurname"
                    label="Фамилия родителя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.parentName"
                    label="Имя родителя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.parentPatronymic"
                    label="Отчество родителя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.parentEmail"
                    label="Email родителя"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.parentPhone"
                    label="Телефон родителя"
                    required
                ></v-text-field>
               
            </v-col>
        </v-row>
        <v-row v-if="radios == false" justify="сentre">
            <v-col >
                <h3>Данные куратора</h3>
                <v-text-field
                    v-model="form.participantEmail"
                    label="Email участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantSurname"
                    label="Фамилия участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantName"
                    label="Имя участника"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.participantPatronymic"
                    label="Отчество участника"
                    required
                ></v-text-field>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="localeBirthday"
                            label="Дата рождения участника"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="form.participantBirthday"
                        @input="menu = false"
                        locale="ru"
                    ></v-date-picker>
                </v-menu>
                <v-radio-group
                    label="Пол участника: "
                    v-model="form.participantGender"
                    row
                >
                    <v-radio
                        label="Мужской"
                        value="male"
                    ></v-radio>
                    <v-radio
                        label="Женский"
                        value="female"
                    ></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-btn color="primary" @click="onSubmit" >Подать заявку</v-btn>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'EntryForm',
    data: () => ({
        form: {
            participantSurname: '',
            participantName: '',
            participantPatronymic: '',
            participantEmail: '',
            participantBirthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            parentSurname: '',
            participantGender: '',
            parentName: '',
            parentPatronymic: ''
        },
        menu: false,
    }),
    props:['radios'],
    computed: {
        localeBirthday() {
            return new Date(this.form.participantBirthday).toLocaleDateString()
        }
    },
    methods: {
        ...mapActions('common', ['createEntry']),
        async onSubmit() {
            console.log(JSON.stringify(this.form))
            await this.createEntry(this.form)
        },
    }
}
</script>
