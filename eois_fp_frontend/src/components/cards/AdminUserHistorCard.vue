<template>
<v-dialog
      v-model="dialog"
      width="500">
    <template v-slot:activator="{ on, attrs }">
          <v-btn max-width= "250"
            color="primary"
            v-bind="attrs"
            v-on="on"
          >История сессий</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >История пользовтеля
            </v-toolbar>
            <v-expansion-panels focusable>
                <v-expansion-panel>
                    <v-expansion-panel-header hide-actions expand-icon="mdi-menu-down">
                        <h3>ФИО  </h3>
                        <v-spacer/>
                        <p>Направления</p>
                        <v-spacer/>
                        <p>Статус</p>
                        <v-checkbox class="shrink mr-2 mt-0" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item-content>
                          <v-row justify="space-around">
                            <v-col cols="4">
                                <p>Участник</p>
                                <p>ФИО</p>
                                <p>Дата рождения</p>
                            </v-col>
                            <v-col cols="4">
                                <p>Родитель</p>
                                <p>ФИО</p>
                                <p>Номер</p>
                                <p>Почта</p>
                            </v-col>
                            <v-col cols="4">
                                <p>Родитель</p>
                                <p>ФИО</p>
                                <p>Номер</p>
                                <p>Почта</p>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>
<script>
export default {

}
</script>
