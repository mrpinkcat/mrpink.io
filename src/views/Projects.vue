<template>
<div id="projects">
  <p>{{username}} repos :</p>
  <ul>
    <li v-for='repo in repos' :key='repo.id'>{{repo.name}}</li>
  </ul>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Projects extends Vue {
  @Prop() public username: string = 'mrpinkcat';
  @Prop() public repos!: any;


  public mounted() {
    axios.get('https://api.github.com/users/mrpinkcat/repos').then((res) => {
      this.repos = res.data;
    });
  }
}
</script>

<style lang="scss">
@import "./../sass/mrpink.io";

#projects {
  margin: 0 8px;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
}
</style>
