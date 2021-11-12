import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js/auto";
import Chartkick from "vue-chartkick";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
