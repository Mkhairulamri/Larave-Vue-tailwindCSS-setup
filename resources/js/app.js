require('./bootstrap');

import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router/router.js';


createApp(App).use(router).mount('#app');

