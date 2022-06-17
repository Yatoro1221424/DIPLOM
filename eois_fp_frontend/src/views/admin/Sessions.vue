<template>
    <div>
        <v-row>
            <v-col
                cols="12"
                sm="8"
                md="8"
            >
                <v-text-field outlined label="Поиск" required ></v-text-field>
            </v-col>
            <v-col
                cols="4"
                md="4"  
            >
                <v-combobox
                    label="Фильтрация"
                    clearable
                    multiple
                    outlined
                    small-chips
                ></v-combobox>
            </v-col>
        </v-row>
        <SessionList/>
        <v-btn depressed class="primary " to="/admin/sessions-create">
            Создать новую сессию
        </v-btn>
    </div>
</template>

<script>
import SessionList from '../../components/lists/SessionList.vue'
export default {
  components: { SessionList },
    name: 'Sessions',
}
</script>
