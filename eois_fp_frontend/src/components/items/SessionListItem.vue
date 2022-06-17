<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item,i) in 5"
      :key="i">
      <v-expansion-panel-header expand-icon="mdi-menu-down">
        <h3>Место проведение: Кампус</h3>
        <v-spacer/>
        <p>Дата начала </p>
        <p>Дата конца </p>
        <p>Статус</p>
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
                      v-model="dateRangeText"
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
                prepend-icon="mdi-bank-plus"
                disabled
                required
              ></v-text-field>
              <v-spacer/>
              <v-textarea
                outlined
                disabled
                name="description"
                label="Описание"
                prepend-icon="mdi-order-alphabetical-descending"
              ></v-textarea>
              <v-combobox
                label="Проекты"
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
export default {
    data: () => ({
        dates: ['2019-09-10', '2019-09-20'],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
}
</script>
