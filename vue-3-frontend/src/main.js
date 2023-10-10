import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import './assets/main.css'
import store from '../store'

const app = createApp(App);

app.use(router); // Use the router
app.use(store); // Use the Vuex store

app.mount('#app');