<template>
   <v-card>
     <v-card-title>
      Рейтиен участников
      <v-spacer/>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск по участникам"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      hide-default-footer
      :headers="headers"
      :items="user"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>

export default {
    name: "RetingUserTable",
    data () {
        return {
            search: '',
            headers: [
                {
                    text: 'ФИО',
                    align: 'start',
                    sortable: false,
                    value: 'fullname',
                },
                { text: 'Поощрения', value: 'encouragement', align: 'center', class:'green lighten-4'},
                { text: 'Штрафы', value: 'fine', align: 'center', class:'red lighten-4'},
                { text: 'Спорт', value: 'sport', align: 'center', class:'blue lighten-4'},
                { text: 'Итог', value: 'outcome', align: 'center'},
            ],
            user: [
                {
                    
                    fullname: `Иван Иванов Иванович`,
                    encouragement: 505,
                    fine: 310,
                    sport: 145,
                    bestcoworcer: 600,
                },
                {
                    fullname: 'Павел Павлов Павлоич',
                    encouragement: 1000,
                    fine: 100,
                    sport: 500,
                    bestcoworcer: 1100,
                },
                {
                    fullname: 'Алла Симонова Романован',
                    encouragement: 1234,
                    fine: 123,
                    sport: 323,
                    bestcoworcer: 123,
                },
                {
                    fullname: 'Алиса Котова Никитован',
                    encouragement: 1002540,
                    fine: 1034420,
                    sport: 503340,
                    bestcoworcer: 12100,
                }
            ],
        }
    }
}
</script>
<style lang="scss">  
    tbody tr:hover {
        td:nth-of-type(2) {
            background-color: #81C784 ;
        }
        td:nth-of-type(3) {
            background-color: #EF9A9A ;
        }
        td:nth-of-type(4) {
            background-color: #90CAF9 ;
        }
        td:nth-of-type(5) {
            background-color: #FFF59D ;
        }
    }

    // вверху выдиляет всю строку а внизу ни выдиляет нечиго
    
    // tbody tr:hover {
    //     background-color: inherit !important;
    // }
    tbody td {
        text-align: center;
    }
    // tbody td:nth-of-type(1) {
    //     text-align: left;
    // }
    tbody td:nth-of-type(2) {
        background-color: #C8E6C9 ;
    }
    tbody td:nth-of-type(3) {
        background-color: #FFCDD2 ;
    }
    tbody td:nth-of-type(4) {
        background-color: #BBDEFB ;
    }
    tbody td:nth-of-type(5) {
        background-color: #FFF9C4 ;
    }
   
</style>