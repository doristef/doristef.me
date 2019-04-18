<template>
  <b-container fluid id="app">
    <Navigation :menu='menu' :menuSocial='menuSocial' />
    <Home :menuSocial='menuSocial' :aboutMe='aboutMe' />
  </b-container>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Home
  },
  data() {
    return {
      /* Items for navigation menu */
        menu: ['Home', 'Projects', 'About me', 'Social'],
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
