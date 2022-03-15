import * as Vue from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routerMap from './router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerMap
})


const app = Vue.createApp(App)

app.use(router)

app.mount("#app")