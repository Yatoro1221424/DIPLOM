<template>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item,i) in 5"
      :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">
            <v-avatar color="teal"  class="shrink mx-4" >
                <img
                  src="../../assets/Безымянный.png"
                  alt="ШаркИт"
                >
            </v-avatar>
            <h3>Фирма: ШаркИТ</h3>
            <v-spacer/>
            <p>Слоган: всегда и везде покарим моря программирования</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item-content>
              <v-rov>
                <v-col> 
                <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                ></v-file-input>
                </v-col>
                <v-col>
                    <v-text-field
                    label="Название"
                    prepend-icon="mdi-rename-box"
                    required
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-spacer/>
                    <v-textarea
                    outlined
                    name="description"
                    label="Слоган"
                    prepend-icon="mdi-order-alphabetical-descending"
                    ></v-textarea>
                </v-col>
                 </v-rov>
            </v-list-item-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    
}
</script>
