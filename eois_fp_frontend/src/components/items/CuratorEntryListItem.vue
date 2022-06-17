<template>
    <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item,i) in 5"
        :key="i">
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
                    <h3>ФИО  </h3>
                    <v-spacer/>
                    <p>дата рождения</p>
                    <v-spacer/>
                    <p>выбранные направления</p>
                </v-list-item-content>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
}
</script>
