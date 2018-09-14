<template lang="html">
<div id="projects">
 <p>{{username}}</p>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Projects extends Vue {
  // @Prop username: string;

  // mounted() {
  //   Vue.axios.get('https://api.github.com/users/mrpinkcat').then(res => {
  //     console.log(res.data);
  //     this.username = res.data.login;
  //   })
  // };
}
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#projects {
  margin: 0 8px;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
}
</style>
