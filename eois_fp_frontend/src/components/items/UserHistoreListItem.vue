<template>
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
                    <AdminMessedUserCard/>
                    <p>Почта</p>
                    <p>Номер</p>
                    </v-row>
                </v-list-item-content>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import AdminMessedUserCard from '../cards/AdminUserHistorCard.vue'
export default {
  components: { AdminMessedUserCard },
}
</script>