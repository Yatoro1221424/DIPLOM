<template>

    <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item,i) in 5"
        :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">
            <h3>ФИО</h3>
            <v-spacer/>
            <p>Дата заявки</p>
            <v-spacer/>
            <p>Статус принятия</p>
            <v-checkbox class="shrink mr-2 mt-0" />
            <template v-slot:actions>
                <v-icon color="primary">
                    $expand
                </v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
            <v-row justify="space-around" no-gutters>
                <v-col cols="6">
                    <p>Участник</p>
                    <p>ФИО</p>
                    <p>Дата рождения</p>
                </v-col>
                <v-col cols="6">
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
</template>

<script>
export default {
    data: () => ({

    }),
}
</script>
