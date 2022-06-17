import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css' 
import 'vuetify/dist/vuetify.min.css'

const vuetify = new Vuetify()

Vue.use(Vuetify);

Vue.use(TiptapVuetifyPlugin, {
    vuetify, 
    iconsGroup: 'xs'
  })

export default new Vuetify({
});
