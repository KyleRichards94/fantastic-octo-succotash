import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import './assets/main.css'
import store from '../store'

createApp(App).use(router,store).mount('#app')