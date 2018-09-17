<template>
  <div class="project-card">
    <div>
      <a class="repo-name" :href='repo.url' target="blank">{{repo.name}}</a>
      <ul>
        <li>Desc : {{repo.desc}}</li>
        <li v-if='repo.lastCommit'>Last update : {{repo.lastCommit}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop() private repo!: any;
}
</script>

<style lang="scss">
@import '@/sass/mrpink.io.scss';

.project-card {
  background: $grey-light;
  margin: 8px 0 8px 8px;
  padding: 1em;
  width: 27%;
  display: inline-flex;
  border-radius: 6px;
  .repo-name {
    color: $text-pink;
    text-decoration: none;
    font-size: 1.25em;
  }
}
</style>

