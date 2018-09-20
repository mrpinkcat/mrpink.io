<template>
  <div class="project-card">
    <div>
      <a class="repo-name" :href='repo.url' target="blank">{{repo.name}}</a>
      <p class="desc">{{repo.desc}}</p>
      <div v-if='repo.archived' class="archived">Archived <i class="fas fa-lock"></i></div>
      <div v-if='!repo.lastCommit' class="empty">Empty <i class="fas fa-battery-empty"></i></div>
      <div v-if='isInactive(repo.lastCommit) && !repo.archived' class="empty">Inactive <i class="fas fa-thermometer-empty"></i></div>
      <div v-if='repo.lastCommit' class="last-commit">{{repo.lastCommit}} <i class="fas fa-clock"></i></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop() private repo!: any;

  public isInactive = (lastCommit: string) => {
    // TODO
  }
}
</script>

<style lang="scss">
@import '@/sass/mrpink.io.scss';

.project-card {
  box-shadow: rgb(170, 170, 170) 2px 2px 5px;
  position: relative;
  background: $grey-light;
  margin: 0px 7px 14px 7px;
  padding: 1.2em 1em 2em 1em;
  width: 27%;
  display: inline-flex;
  border-radius: 6px;
  .repo-name {
    color: $text-pink;
    text-decoration: none;
    font-size: 1.25em;
    font-weight: bold;
  }
  .desc {
    font-size: 0.90em;
  }
  .archived, .empty, .last-commit {
    position: absolute;
    right: 1em;
    font-size: 0.80em;
  }
  .archived, .empty {
    top: 1em;
    color: rgb(170, 0, 0);
    font-weight: bold;
  }
  .last-commit {
    bottom: 1em;
    &::before {
      content: "Last update: ";
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    &:hover {
      &::before {
        opacity: 1;
        transition: opacity 0.2s ease;
        transition-delay: 0.35s;
      }
    }
  }
}
</style>

