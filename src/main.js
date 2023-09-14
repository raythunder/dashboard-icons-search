import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import Clipboard from "v-clipboard";

const app = createApp(App);

app.use(Clipboard);
app.use(VueVirtualScroller);
app.use(createPinia());
app.use(router);

app.mount("#app");
