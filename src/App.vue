<template>
  <b-container fluid id="app">
    <Navigation :menu='menu' :menuSocial='menuSocial' />
    <router-view :menuSocial='menuSocial' :aboutMe='aboutMe'></router-view>
  </b-container>
</template>

<script>
/* Import Vue Router and Components */
import VueRouter from 'vue-router';
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Me from './components/Me.vue';

/* Router Config */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      template: "<Projects />"
    },
    {
      path: '/me',
      name: 'MoreMe',
      component: Me,
      template: "<Me />"
    }
  ],
  // eslint-disable-next-line
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

/* APP - data */
export default {
  name: 'App',
  router,
  components: {
    Navigation
  },

  data() {
    return {
      /* Items for navigation menu */
        menu: {
          home : ['doristef.me', '/'],
          projects :  ['Projects', '/projects'],
          aboutme : ['More of me', '/me']
        },
      /* Items for social links */
        menuSocial: {
          codepen : ['Codepen', 'https://codepen.io/doristef87/'], 
          linkedin : ['Linkedin', 'https://www.linkedin.com/in/doristef'], 
          stackOverflow : ['Stack-Overflow', 'https://stackoverflow.com/u/10667067/'], 
          github : ['Github', 'https://github.com/doristef']
        },
      /* About Me */
        aboutMe: {
          myPhoto: 'http://doristef.me/myPhoto.jpg',
          fullName: 'Halldór Valur Stefánsson',
          title: 'Frontend Developer',
          paragraph1 : 'Hi there, <br /> I\'m Halldór and I\'m a Frontend-Developer.<br /> I studied Frontend-Development at Noroff, <small><i>School of Technology and Digital Media.</i></small> - A 2-year full-time study.',
        }
    }
  }
}
</script>