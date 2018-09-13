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
        displayName : 'Jobs',
        path : 'jobs',
      },
      {
        displayName : 'Projects',
        path : 'projects',
      },
      {
        displayName : 'Diplomas',
        path : 'diplomas',
      },
      {
        displayName : 'Contacts',
        path : 'contacts',
      },
    ],
  };
}
</script>


<style lang="scss">
@import './sass/mrpink.io';
</style>
