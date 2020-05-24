<template>
  <div id="app">
    <Navbar :navInfo='navInfo'/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    Navbar,
  },
})
export default class Main extends Vue {
  @Prop() private navInfo: any = {
    routerLinksNav : [
      {
        displayName: 'Jobs',
        path: 'jobs',
      },
      {
        displayName: 'Projets',
        path: 'projects',
      },
      {
        displayName: 'Formation',
        path: 'school',
      },
      {
        displayName: 'Veille',
        path: 'veille',
      },
      {
        displayName: 'Contacts',
        path: 'contacts',
      },
    ],
    routerLinksExt : [
      {
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/anizan-g/',
      },
      {
        icon: 'fa-github-alt',
        url: 'https://github.com/mrpinkcat',
      },
      {
        icon: 'fa-instagram',
        url: 'https://www.instagram.com/gatien.anizan/',
      },
    ],
  };
}
</script>


<style lang="scss">
@import './sass/mrpink.dev';
</style>
