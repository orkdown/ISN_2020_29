import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue ({
render: h => h(App),
}).$mount('#app')

