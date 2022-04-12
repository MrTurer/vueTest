import { createApp } from 'vue';
import moment from "moment";
import App from "@/app/App";
import "./assets/theme/default/style.scss";
import router from "@/app/app-routes";
import VueApexCharts from "vue3-apexcharts";
import store from '@/app/shared/state/index'
import {configAxios} from "@/common/axios";

configAxios();
const app = createApp(App)
    .use(router)
    .use(store)
    .use(VueApexCharts);
app.config.globalProperties.$momentFormat = (date, format) =>
  date != null ? moment(date).locale('ru').format(format) : "";
app.mount('#app');
