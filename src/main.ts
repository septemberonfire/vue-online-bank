import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './theme.css'
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
