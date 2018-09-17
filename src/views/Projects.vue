<template>
  <div id="projects">
    <Loading class="loading-comp" v-if='loading' :comment='"Fetching the Github API..."' :status='repos.length' :total='loadingTotal' />
    <div class="project-card-container" v-if='!loading'>
      <ProjectCard v-for='repo in repos' :key='repo.lastCommit' :repo='repo'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard.vue';
import Loading from '@/components/Loading.vue';

@Component({
  components: {
    ProjectCard,
    Loading,
  },
})
export default class Projects extends Vue {
  @Prop() public username: string = 'mrpinkcat';
  @Prop() public repos: any = [];
  @Prop() public loading: boolean = false;
  @Prop() public loadingTotal!: number;

  public mounted() {
    this.loading = true;
    axios.get('https://api.github.com/users/mrpinkcat/repos').then((res) => {
      // Met a jour le nombre total de repo
      this.loadingTotal = res.data.length;
      for (const repo of res.data) {
        // Check si le repo est vide pour éviter une error lors du get du last commit
        if (repo.size > 0) {
          axios.get(`https://api.github.com/repos/${this.username}/${repo.name}/commits`)
          .then((resCommit) => {
            this.repos.push({
              name : repo.name,
              desc : repo.description,
              url : repo.html_url,
              // Slice the date for let just the date ()
              lastCommit : resCommit.data[0].commit.committer.date.slice(0, 10),
            });
            // Check si tous les repos sont chargés pour changer la state de la prop loading
            if (this.repos.length === res.data.length) {
              this.loading = false;
            }
          });
        } else {
          this.repos.push({
            name : repo.name,
            desc : repo.description,
            url : repo.html_url,
            lastCommit : undefined,
          });
          // Check si tous les repos sont chargés pour changer la state de la prop loading
          if (this.repos.length === res.data.length) {
            this.loading = false;
          }
        }
      }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .project-card-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
