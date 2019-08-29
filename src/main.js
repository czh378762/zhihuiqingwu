import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
//https://segmentfault.com/a/1190000013173840
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { faBible } from "@fortawesome/free-solid-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";
import "moment/locale/zh-cn";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";
// import "videojs-contrib-hls";
import "@/assets/js/LuShu.js";
import commonService from "@/api/commonService";

Vue.prototype.$video = videojs;

moment.locale("zh-cn");
Vue.prototype.$moment = moment;

library.add(faChessKnight);
library.add(faBible);
library.add(faChess);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import ElementUI from "element-ui";
import "./assets/scss/_common.scss";
import "element-ui/lib/theme-chalk/index.css";

import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.orgList = [];
// 获取机构列表
commonService.getOrgList().then(res => {
  Vue.prototype.orgList = res.data || [];
});

Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
