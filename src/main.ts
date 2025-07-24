import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import focus from './directives/focus'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('focus', focus)
app.mount('#app')
