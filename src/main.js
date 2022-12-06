import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elements from "./components/elements/elements";
import "./assets/style/style.scss";

const app = createApp(App);

elements.forEach((el) => {
  app.component(el.name, el);
});

app.use(store).use(router).mount("#app");
