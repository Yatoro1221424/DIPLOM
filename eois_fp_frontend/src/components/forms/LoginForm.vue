<template>
    <v-form class="d-flex flex-column align-center">
        <v-col cols="12" sm="4" justify-center>
            <v-text-field
                v-model="form.email"
                label="Email"
                :type="'email'"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Пароль"
                @click:append="show = !show"
            ></v-text-field>
            <v-row>
                <v-btn color="primary" class="ma-2" width="130" @click="onSubmit">Войти</v-btn>
                <v-btn  class="ma-2" @click="onSubmit2">Зарегистрироваться</v-btn>
            </v-row>
        </v-col>
    </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'LoginForm',
    data: () => ({
        form: {
            email: '',
            password: ''
        },
        show: false
    }),
    computed: {
        ...mapGetters('auth', ['getLoggedIn'])
    },
    methods: {
        ...mapActions('auth', ['login']),
        async onSubmit() {
            await this.login(this.form)
            if (this.getLoggedIn) {
                this.$router.push('/')
            }
        },
        async onSubmit2() {
            this.$router.push('/entry')
        }
    }
}
</script>
