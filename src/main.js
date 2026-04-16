import { createApp } from "vue";
import "./style/style.scss";
import App from "./App.vue";
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
createApp(App).use(router).mount("#app");
