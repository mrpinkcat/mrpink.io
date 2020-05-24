<template>
  <div id="projects">
    <h2>Mes projet de BTS</h2>
    <div class="projects">
      <div class="project">
        <h3>Our-Books</h3>
        <a target="_blank" href="https://our-books.mrpink.dev/">our-books.mrpink.dev</a>
        <p>Our-Books est une application SaaS (Software as a Service) pour gerer les contenue des biblothèques</p>
        <p>Ce projet est séparer en deux. Le front tourne sur vue.js, avec un theme CSS designé par mes soins. Le back tourne sur node.js routé avec express comuniquant avec une base MongoDB stockant les utilisateurs, les livres et les bibliothèques.</p>
        <p>Les deux partie sont déployé chez moi sur un Raspberry PI 3B.</p>
        <div class="images">
          <img src="./../assets/screen-books-1.png">
          <img src="./../assets/screen-books-2.png">
        </div>
      </div>
      <div class="project">
        <h3>U-Chat</h3>
        <a target="_blank" href="http://pink.zapto.org:8080/">pink.zapto.org</a>
        <p>U-Chat est une application SaaS (Software as a Service) de conversation instantané.</p>
        <p>Ce projet est séparer en deux. Le front tourne sur vue.js, avec un theme CSS designé par mes soins. Le back tourne sur node.js routé avec express comuniquant avec une base MongoDB stockant les utilisateurs, les conversations, et les messages.</p>
        <p>Les deux partie sont déployé chez moi sur un Raspberry PI 3B.</p>
        <div class="images">
          <img src="./../assets/screen-chat-1.png">
          <img src="./../assets/screen-chat-2.png">
        </div>
      </div>
      <div class="project">
        <h3>Yuka</h3>
        <p>Yuka est une application pour surveiller ce que nous ingerons.</p>
        <p>Ce projet est une application. Il utilise electron, ce qui me permet d'avoir une seul version à maintenir alors que l'application tourne sur le web, mac os, linux et windows.</p>
        <div class="images">
          <img src="./../assets/screen-yuka-1.png">
        </div>
      </div>
    </div>
    <h2>Mes projet de travail</h2>
    <div class="projects">
      <div class="project">
        <h3>Le site web de Kwalys</h3>
        <a target="_blank" href="https://kwalys.com/">kwalys.com</a>
        <p>Durant mon contrat j'ai refait le site web de l'entrerpise.</p>
        <p>Ce site web n'utilise aucune dépendance n'y aucun framework CSS.</p>
        <div class="images">
          <img src="./../assets/screen-web-1.png">
          <img src="./../assets/screen-web-2.png">
        </div>
      </div>
      <div class="project">
        <h3>La chatbox de Kwalys</h3>
        <p>Durant mon contrat j'ai refait la chatbox viellissante de l'entrepise.</p>
        <p>La chatbox n'utilise aucune dépendance n'y aucun framework CSS.</p>
      </div>
      <div class="project">
        <h3>Le connecteur messenger</h3>
        <p>Durant mon contrat j'ai créer et deployé un connecteur Facebook messenger.</p>
        <p>Le connecteur n'utilise aucune dépendance pour communiquer avec facebook.</p>
      </div>
      <div class="project">
        <h3>Le connecteur WhatsApp</h3>
        <p>Durant mon contrat j'ai créer et deployé en teste un connecteur WhatsApp.</p>
        <p>Le connecteur utilise une tièrce partie pour communiquer avec facebook.</p>
      </div>
    </div>
    <h2>Mes autres projets sur Github</h2>
    <Loading class="loading-comp" v-if='loading' :comment="'Chargement de l\'API de Github ...'" :status='repos.length' :total='loadingTotal' />
    <div class="project-card-container" v-if='!loading'>
      <ProjectCard v-for='repo in repos' :key='repo.name' :repo='repo'/>
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
              archived : repo.archived,
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
            archived : repo.archived,
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
@import "./../sass/mrpink.dev";

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

  .projects {
    width: 80%;
    .project {

      .images {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;

        img {
          border: 2px solid $text-pink;
          width: 48%;
        }
      }
    }
  }
}
</style>
