import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* vue-snip */
import VueSnip from "vue-snip";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
/* sweet alert */
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(store)
  .use(VueSweetalert2)
  .use(VueSnip)
  .use(vuetify)
  .use(router)
  .mount("#app");
