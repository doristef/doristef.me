<template>
  <div>
<!-- Section/Container - About Me -->
  <b-container class="[ pt-5 ][ animated fadeIn fast ][ container-dark container-dark-top ]">
    <b-row>

      <b-container>
          <div class="[ text-center text-lg-left ]">
            <h1>About me</h1>
          </div>
                      
          <div class="[ mx-1 ml-lg-4 mr-lg-2 mt-4 ]">
            <!-- Me -->
            <p class="[ mx-3 mx-lg-0 my-2 my-lg-0 ]">
              I was born in <strong>Akureyri, Iceland.</strong>
              I lived there until late <b>2013</b> when I was tipped off about an exciting <strong> job in Norway. </strong> <br />
              I started off commuting to work but soon I got bored of that, so I moved to <strong> Hamar </strong> with my family in <b>2015</b>. <br />
              In <b>2016</b> my wife started studying at UiO, so we moved to down <strong> Oslo. </strong>
            </p>

          </div>

      </b-container>
    </b-row>
  </b-container>

<!-- Section/Container - Something -->
  <b-container class="[ animated fadeIn faster delay-1s ][ container-color ]">
    <b-row class="[ container-color-content ][ ml-3 py-5 ]">
      <b-container class="[ py-5 ]">

          <div class="[ text-center text-lg-left ][ pt-5 ]">
            <h1 class="[ container-color-content_heading ]">My hobbies, you ask?</h1>
          </div>

          <div class="[ m-4 py-2 pb-5 ]">
            <!-- Craft Beer -->
            <h3 class="[ container-color-content_heading ]">
              Craft Beer</h3>
              <p class="[ container-color-link ]">
                My absolute favorite thing in the world, Craft Beer! <br />
                I love tasting new and exciting brews, I often set up tasting sessions for my friends and collegues from work.<br />
                I'm an <strong> Equity Punk </strong>, which means I own shares in <strong> BrewDog </strong>. <br /><br />
                <a href="http://efp.brewdog.com/equityforpunks/" title="Equity for Punks by BrewDog">Read more about <strong> Equity for Punks? </strong> </a><br />
                If you are interested feel free to use my referral code, <b>R593156</b>
              </p>
           <!-- Computers -->
            <h3 class="[ container-color-content_heading ]">
              Computer Stuff</h3>
              <p>
                Maybe you guessed this one? <br />
                Yes, I like sitting around and read about <strong>new tech, </strong> <strong>programming</strong>, experiment with <strong>illustrator.</strong>
              </p>
           <!-- Health -->
            <h3 class="[ container-color-content_heading ]">
              Exercise</h3>
              <p>
                  I enjoy exercise such as <strong> crossfit, </strong> <strong> weight-lifting </strong> and <strong> jogging </strong> out in the nature, Norway is the perfect place for that!
              </p>
           <!-- Music -->
            <h3 class="[ container-color-content_heading ]">
              Music</h3>
              <p class="[ pb-5 ]">
                  I mean who doesn't like music?<br />
                  At least I like to listen to <strong> all kinds </strong> of music, and I love attending <strong> concerts </strong> every now and then.
              </p>
          </div>

      </b-container>
    </b-row>
  </b-container>
<!-- Section/Container - Find Me  -->
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
}
</script>