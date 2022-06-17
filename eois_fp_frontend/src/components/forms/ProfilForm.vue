<template>
  <v-form>
    <v-col class="ma-5" align="center">
      <v-avatar color="teal"  class="shrink mx-4" size="150" >
        <img
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
      </v-avatar>
      <h1>ФИО</h1>
    
    <v-sheet text-left>
      <p>Должность: участник</p>
      <p>Направление: С#</p>
      <p>Фирма: Кью-Бит</p>
      <p>Слоган фирмы: Кью-бит бёт все граници IQ</p>
    </v-sheet>
    <v-expansion-panels focusable>
    <v-expansion-panel>
        <v-expansion-panel-header hide-actions expand-icon="mdi-menu-down">
            <h3>Загрузить новое фото</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
              <v-file-input
                label="Загрузить новое фото"
                chips
                truncate-length="15"
              ></v-file-input>
              <v-btn>
                Поменять
              </v-btn>
            </v-list-item-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels focusable>
    <v-expansion-panel>
        <v-expansion-panel-header hide-actions expand-icon="mdi-menu-down">
            <h3>Сменить имя фамилию</h3>
            <v-spacer/>
            <p>Все заявки проходят через администратора:)</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
              <v-text-field
                label="Имя"
              >
              </v-text-field>
              <v-text-field
                label="Фамилия"
              >

              </v-text-field>
              <v-text-field
                label="Отчество"
              >
              </v-text-field>
              <v-btn>
                Подать заявку
              </v-btn>
              
            </v-list-item-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels focusable>
    <v-expansion-panel>
        <v-expansion-panel-header hide-actions expand-icon="mdi-menu-down">
            <h3>Поменять пароль</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
              <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Старый пароль"
                @click:append="show1 = !show1"
            ></v-text-field>
              <v-text-field
                v-model="form.password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                label="Новый пароль"
                @click:append="show2 = !show2"
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                label="Повторите"
                @click:append="show3 = !show3"
            ></v-text-field>
            </v-list-item-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels></v-col>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
        form: {
            email: '',
            password: ''
        },
        show1: false,
        show2: false,
        show3: false,
    }),
}
</script>
