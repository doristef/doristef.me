<template>
  <div>
<!-- Section/Container - About Me -->
  <b-container class="[ pt-5 ][ animated fadeIn fast ][ container-dark container-dark-top ]">
    <b-row>

      <b-container>
        <b-row>
        <div class="[ col-12 col-md-4 col-lg-2 ]">
          <div class="[ text-center ]">
            <b-img v-if="aboutMe.myPhoto"  v-bind="myImage" :src='aboutMe.myPhoto' alt="Halld&#243;r Valur Stef&aacute;nsson" />
          </div>
        </div>

        <div class="[ col-12 col-md-8 col-lg-10 ]">
          <div class="[ ml-4 mr-2 mt-4 ]">
            <h1 v-if="aboutMe.fullName">{{ aboutMe.fullName }}</h1>
              
            <div class="[ ml-3 mb-2 ]">
              <h3 v-if="aboutMe.title">{{ aboutMe.title }}</h3>
              <p v-if="aboutMe.paragraph1" v-html="aboutMe.paragraph1">
              </p>
              <p v-if="aboutMe.paragraph2" v-html="aboutMe.paragraph2">
              </p>
            </div>
          </div>
        </div>
        </b-row>
      </b-container>
    </b-row>
  </b-container>

<!-- Section/Container - Education -->
  <b-container class="[ pt-5 ][ animated fadeIn faster delay-1s ][ container-color ]">
    <b-row class="[ container-color-content ][ ml-3 ]">
      <b-container>

          <div class="[ text-center text-lg-left ]">
            <h1 class="[ container-color-content_heading ]">Education</h1>
          </div>

          <div class="[ ml-4 mr-2 mt-4 ]">
            <!-- School 1 detail -->
            <h3 class="[ container-color-content_heading ]">
              Noroff <small><i>- School of Technology and Digital Media</i></small></h3>

              <b class="[ pl-3 ]">Frontend Developer </b>
              <p class="[ pl-3 ]">
                2 years program, 120 ECVET points.
              </p>
            <!-- School 2 detail -->
            <h3 class="[ container-color-content_heading ]">Akureyri Comprehensive College</h3>
              <b class="[ pl-3 ]">Electrician Journeyman</b>
              <p class="[ pl-3 ]">
                3.5 years study, finished in februar 2010.
              </p>
              <b-button href="/hvs_my-cv.pdf" variant="dark" class="[ m-2 ]">Download my CV!</b-button>
          </div>
          
      </b-container>
    </b-row>
  </b-container>
<!-- Section/Container - Finde Me  -->
  <b-container class="[ pt-5 ][ animated fadeIn fast ][ container-dark container-dark-middle ]">
    <b-row>
      <b-container class="[ mb-5 ]">

        <b-media>
          <div class="[ text-center text-lg-left ]">
            <h1>Find me at</h1>
          </div>
          <div class="[ ml-4 mr-2 mt-4 ]">
            <div>
               <b-link v-for="(item, key) in menuSocial" :key="key" class="[ mx-3 ]" :href='item[1]'>
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: String(deCamelCase(key)) }" size="3x" class="[ text-navigation-icon ]" /> 
                </b-link>
            </div>
          </div>
        </b-media>

      </b-container>
    </b-row>
  </b-container>
  </div>
</template>

<script>
/* Imports */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

/* HOME */
export default {
  name: 'Home',
  props: {
    menuSocial: Object,
    aboutMe: Object
  },

  components: { FontAwesomeIcon },
  methods: {
    deCamelCase(key) {
        return key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    },
  },
  data() {
      return {
        myImage: { width: 175, height: 175, rounded: 'circle', class: '[ myImg ][ mt-3 mx-auto mx-lg-3 ]'}
      }
  }
}
</script>