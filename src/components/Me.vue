<template>
  <div>
<!-- Section/Container - About Me -->
  <b-container class="[ pt-5 ][ animated fadeIn fast ][ container-dark container-dark-top ]">
    <b-row>

      <b-container>
          <div class="[ text-center text-lg-left ]">
            <h1>{{ aboutMe.fullName }}</h1>
          </div>
                      
          <div class="[ ml-4 mr-2 mt-4 ]">
            <h2>Coming Soon...</h2>
          </div>

      </b-container>
    </b-row>
  </b-container>

<!-- Section/Container - Something -->
  <b-container class="[ pt-5 ][ animated fadeIn faster delay-1s ][ container-color ]">
    <b-row class="[ container-color-content ][ ml-3 ]">
      <b-container>

          <div class="[ text-center text-lg-left ]">
            <h1 class="[ container-color-content_heading ]">Something fun here</h1>
          </div>

          <div class="[ ml-4 mr-2 mt-4 ]">
            <!-- Something Fun -->
            <h3 class="[ container-color-content_heading ]">
              Coming Soon...</h3>

              <b class="[ pl-3 ]">Coming Soon... </b>
              <p class="[ pl-3 ]">
                Coming Soon...
              </p>

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

/* MORE ME */
export default {
  name: 'MoreMe',
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
  // data() { return {} }
}
</script>