import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DateConverter from './plugins/DateConverter'
import NumberConverter from './plugins/NumberConverter'
let app = createApp(App);

app.use(router);
app.use(DateConverter);
app.use(NumberConverter);
app.mount("#app");