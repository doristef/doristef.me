import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './scss/styles.scss';
import "animate.css/animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub, faStackOverflow, faCodepen} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faStackOverflow, faCodepen, faChevronCircleRight, faChevronCircleLeft);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
