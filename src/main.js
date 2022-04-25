import { createApp } from "vue";
import App from "./App.vue";
import "./css/tail.css";
import router from "./router/router";

createApp(App).use(router).mount("#app");
