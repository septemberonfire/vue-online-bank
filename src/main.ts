import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import '@/theme.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
