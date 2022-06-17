<template>
  <div>
    <v-app-bar
      color="teal darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ЭОИС ФП</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title v-if="$route.name == '/'">
          <v-tab>О нас</v-tab>
          <v-tab>Наши направления</v-tab>
          <v-tab to="/curatorial" class="tab-link" >
            Наши кураторы>
          </v-tab>
          <v-tab to="/admin/project-entries" class="tab-link" disabled>
            Отзывы
          </v-tab>
          <v-tab>
            <router-link to="/list-sessions" class="tab-link" >Список сессий</router-link>  
          </v-tab>
        </v-tabs>

        <v-tabs align-with-title v-if="$route.name == 'Profile'">
          <v-tab to="/profile">Личный кабинет</v-tab>
          <v-tab>Мой рейтинг</v-tab>
          <v-tab>Моя фирма</v-tab>
          <v-tab>Расписание</v-tab>
          <v-tab>Предложить проект</v-tab>
        </v-tabs>

        <v-tabs align-with-title v-if="$route.name == 'Rating'">
          <v-tab>Рейтинг участников</v-tab>
          <v-tab>Рейтинг фирм</v-tab>
        </v-tabs>

        <v-tabs align-with-title v-if="$route.name == 'Curatorial'">
          <v-tab>Управление фирмой</v-tab>
          <v-tab>Штрафы и поощрения</v-tab>
          <v-tab>Мероприятия</v-tab>
        </v-tabs>

        <v-tabs align-with-title v-if="$route.path.includes('admin')">
          <v-tab to="/admin/sessions" class="tab-link" v-if="getLoggedIn">
            Сессии
          </v-tab>
          <v-tab  to="/admin/participant-entries" class="tab-link" v-if="getLoggedIn">
            Заявки участников
          </v-tab>
          <v-tab to="/admin/curator-entries" class="tab-link" v-if="getLoggedIn">
            Заявки кураторов
          </v-tab>
          <v-tab to="/admin/project-entries" class="tab-link" v-if="getLoggedIn">
            Проекты
          </v-tab>
          <v-tab to="/admin/user-histore" class="tab-link" v-if="getLoggedIn">
            Пользователии
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="teal--text text--accent-4"
        >
          <router-link to="/" class="link">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Домой</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/login" class="link" v-if="!getLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Войти</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/profile" class="link" v-if="getLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Профиль</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/rating" class="link" v-if="getLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Рейтинг</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/curatorial" class="link" v-if="getLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Кураторская</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/admin/sessions" class="link" v-if="getLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-application-cog-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Администрирование</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-item @click="onLogoutClicked" v-if="getLoggedIn">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title><a class="link">Выйти</a></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'MainMenu',

    data: () => ({
      drawer: false,
      group: null,
    }),

    computed: {
      ...mapGetters('auth', ['getLoggedIn'])
    },

    methods: {
      ...mapActions('auth', ['logout']),

      onLogoutClicked() {
        this.logout()
      }
    }
  }
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}
.tab-link {
  text-decoration: none;
  color: white;
}
</style>
