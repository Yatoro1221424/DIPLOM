<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel >
        <v-expansion-panel-header expand-icon="mdi-menu-down">
            <v-avatar color="teal"  class="shrink mx-4" >
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                  alt="ШаркИт"
                >
            </v-avatar>
            <h3>Папа Влад</h3> 
            <v-spacer/>
            <p>Направления(ев): C#, Web-сайты</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
              <h1>Владислав Болховец</h1>
              <p>Главный куратор в таких направлениях как: C# программирование и web-зарзаботке. </p>
              <p>Является заказчиком проекта(тов):</p>
              <p>Мед. приложение для людей, которые пережили инсульт, приложение должно помочь им в игровой форме завново научится оределять направления(вверх,вниз,влево, вправо)  </p>
              <p>Web-сайт для "ЭОИС ФП". Данный сайт нужен для автоматизации записи, управлением людейна смену в лагере, дополнительно является средством использования кураторами и учасниками для того, чтобы упростить нахождение их в лагере. </p>
            </v-list-item-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
    data () {
        return {
          page: 1,
        }
    },
}
</script>