import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// import Particles from "./vue particles";
// createApp(App).use(Particles).mount("#app");
createApp(App).use(store).use(router).mount('#app')