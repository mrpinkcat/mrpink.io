<template>
  <div class="project-card">
    <ul>
      <p v-if='!repos'>loading ...</p>
      <li v-for='repo in repos' :key='repo.id'><a :href='repo.url'>{{repo.name}}</a>
        <ul>
          <li>Desc : {{repo.desc}}</li>
          <li v-if='repo.lastCommit'>Last update : {{repo.lastCommit}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop() private repos!: any;
}
</script>

