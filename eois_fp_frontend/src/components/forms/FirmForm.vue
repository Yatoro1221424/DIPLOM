<template>
    <div>
      <v-form>
          <v-row>
          <v-col> 
            <v-file-input
              
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Логотип"
            ></v-file-input> <!--:rules="rules" -->
            <v-text-field
              label="Название"
              prepend-icon="mdi-rename-box"
              required
            ></v-text-field>
            <v-spacer/>
            <v-textarea
              outlined
              name="description"
              label="Слоган"
              prepend-icon="mdi-order-alphabetical-descending"
            ></v-textarea>
            <v-btn color="primary">Добавить</v-btn>
          </v-col>
        </v-row>
      </v-form>
    <FirmList/>
    </div>
</template>

<script>
import FirmList from '../lists/FirmList.vue'
export default {
  components: { FirmList },
    name: 'FirmForm',
}
</script>
