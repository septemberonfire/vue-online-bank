import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import App from '@/App.vue';
import router from '@/router';
import '@/theme.css';

const pinia = createPinia();
const firebaseConfig = {
  apiKey: "AIzaSyA3dkHaT2iwpyMDSPmbat_EMhkxt97al_0",
  authDomain: "vue-bank-app-40204.firebaseapp.com",
  projectId: "vue-bank-app-40204",
  storageBucket: "vue-bank-app-40204.appspot.com",
  messagingSenderId: "503141518654",
  appId: "1:503141518654:web:3ea9814f9ba281983cf06f"
};

const fbApp = initializeApp(firebaseConfig);
export const auth = getAuth(fbApp);

createApp(App).use(router).use(pinia).mount('#app');
