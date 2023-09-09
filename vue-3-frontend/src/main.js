import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'


createApp(App).mount('#app')

//we will do great things

createApp(App).use(router).mount('#app')

