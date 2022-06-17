<template>
 <v-card>
          <v-app-bar
            color="#6A76AB"
            dark
          >
          <v-app-bar-title>Информация</v-app-bar-title>
          <template v-slot:extension class="ma-9">
            <v-tabs align-with-title>
              <v-tab @click="paeg = 1">Поощрения</v-tab>
              <v-tab @click="paeg = 2">Штрафы</v-tab>
              <v-tab @click="paeg = 3">Фирма</v-tab>
              <v-tab @click="paeg = 4">Мой график</v-tab>
            </v-tabs>
          </template>
        </v-app-bar> 
        <CalendarFines v-if="paeg == 1"/>
        <CalendarIncentives v-if="paeg == 2"/>
        <FirmGraphics v-if="paeg == 3"/>
        <UserGraphics v-if="paeg == 4"/>

      <v-card-actions>
        <v-col align="right">
          <v-btn v-if="paeg < 3">
            Оспорить
          </v-btn>
          {{test}}
        </v-col>
      </v-card-actions>
    </v-card>
</template>
<script>
import CalendarFines from '../calendar/CalendarUserFines.vue'
import CalendarIncentives from '../calendar/CalendarUserIncentives.vue'
import FirmGraphics from '../graphics/FirmGraphics.vue'
import UserGraphics from '../graphics/UserGraphics.vue'
  export default {
    data: () => ({
        paeg: 1,
    }),
    components: { CalendarFines, CalendarIncentives, FirmGraphics, UserGraphics },

  }
</script>
