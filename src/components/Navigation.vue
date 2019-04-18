<template>
<div class="[ navigation-container ]">
    <div role="navigation" :class="['[ slidebar ][ d-flex flex-column ]', { isOpen, '' : isOpen }, { '' : !isOpen }]">
        
            <b-nav vertical class="[ flex-column ][ w-100 mb-5 mb-lg-0 ]">
                <b-nav-item v-for="(item, key) in this.menu" :key="key"> 
                    <b-nav-text class="[ text-navigation ]">{{item}}</b-nav-text>
                </b-nav-item>
            </b-nav>

            <b-nav class="[ w-100 ][ mt-5 mt-lg-auto pb-lg-4 ][ text-center ]">

                <!-- Social Links -->
                <b-nav-item v-for="(item, key) in this.menuSocial" :key="key" :href='item[1]' >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: String(deCamelCase(key)) }" size="2x" class="[ text-navigation-icon ]" /> 
                </b-nav-item>

            </b-nav>
    </div>

    <div :class="['[ animated fadeIn ]']">
         <font-awesome-icon :icon="slidebarIcon" 
                            size="3x" 
                            focusable="true"
                            aria-hidden="false"
                            :name="iconName"
                            class="[ text-navigation-arrow ]" 
                            :class="['slidebar-btn animated slow ', [isOpen ?  'flipInX isOpen' : 'flipInY']]"
                            @click="toggle" />

         <span :class="['[ slidebar-btn-text animated ][ ml-2 ]', [isOpen ? 'fadeOutRightBig faster' : 'bounceInDown delay-1s']]"> doristef.me </span>
    </div> 

</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "sidebar-nav",
    props: ['menu', 'menuSocial'],
    components: { FontAwesomeIcon },
    data: () => ({
        iconName: 'Open',
        isOpen: false,
        slidebarIcon: 'chevron-circle-right',
    }),
    methods: {
        deCamelCase(key) {
            return key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
            },
        open() {
            this.isOpen = true;
            this.slidebarIcon = 'chevron-circle-left';
            this.iconName = 'Close';
            },
        close() {
            this.isOpen = false;
            this.slidebarIcon = 'chevron-circle-right';
            this.iconName = 'Open';
            },
        toggle() {
            this.isOpen ? this.close() : this.open();
            }
        }
};
</script>