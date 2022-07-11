import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
axios.defaults.baseURL = 'https://yts.mx/api/v2/'




createApp(App).use(router).mount('#app')
