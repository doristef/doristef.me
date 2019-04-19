/* Import - Vue and App */
import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;

/* Vue Router */
import VueRouter from 'vue-router'
Vue.use(VueRouter)


/* SASS - SCSS */
import BootstrapVue from 'bootstrap-vue';
import './scss/styles.scss';
import "animate.css/animate.css";
Vue.use(BootstrapVue);

/* FontAwesome - FortAwesome  */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faStackOverflow, faCodepen} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faStackOverflow, faCodepen, faChevronCircleRight, faChevronCircleLeft);

/* Mount */
new Vue({
  render: h => h(App),

}).$mount('#app')