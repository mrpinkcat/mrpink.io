<template>
<div id="projects">
  <p>{{username}} repos :</p>
  <ProjectCard :repos='repos'/>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard.vue';

@Component({
  components: {
    ProjectCard,
  },
})
export default class Projects extends Vue {
  @Prop() public username: string = 'mrpinkcat';
  @Prop() public repos: any = [];

  public mounted() {
    axios.get('https://api.github.com/users/mrpinkcat/repos').then((res) => {
      // Get the list of all my repos
      for (const repo of res.data) {
        // Check if the repo is empty of avoid an error while getting le last commit
        if (repo.size > 0) {
          axios.get(`https://api.github.com/repos/${this.username}/${repo.name}/commits`)
          .then((resCommit) => {
            this.repos.push({
              name : repo.name,
              desc : repo.description,
              lastCommit : resCommit.data[0].commit.committer.date,
            });
          });
        } else {
          this.repos.push({
            name : repo.name,
            desc : repo.description,
            lastCommit : undefined,
          });
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
}
</style>
