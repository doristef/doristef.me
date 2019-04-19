<template>
  <b-container fluid id="app">
    <Navigation :menu='menu' :menuSocial='menuSocial' />
    <router-view :menu='menu' :menuSocial='menuSocial' :aboutMe='aboutMe'></router-view>
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
  ]
})

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
        aboutMe: {
          myPhoto: 'http://doristef.me/myPhoto.jpg',
          fullName: 'Halldór Valur Stefánsson',
          title: 'Frontend Developer',
          paragraph1 : 'Hi, I\'m Halldór and I\'m currently studying Frontend-Development at Noroff, School of Technology and Digital Media.',
          paragraph2 : 'This is my webpage and it\'s thought as a Portfolio of my work. '
        }
    }
  }
}
</script>