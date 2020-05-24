<template lang="html">
  <div id="start">
    <!-- <div class="picture">
      <img src="./../assets/visage.png" alt="">
    </div> -->
    <div class="who-is">
      <h1>Bonjour, c'est <span class="mrpink">Gatien</span> !</h1>
      <img src="./../assets/me.jpg" alt="A pic of me :)" height="200px">
      <small>Oui c'est moi :)</small>
      <div class="content">
        <h2>Qui suis-je ?</h2>
        <p>Je suis développeur et étudiant en BTS SIO option SLAM en altnerance. J'ai 21 ans et je suis titulaire du permis B et possesseur d'une automobile.</p>
        <p>J'ai appris à coder en 2014. Je préferais coder que suivre en cour, c'est pour ça qu'a ce jour j'ai eu mon BAC PRO SEN (mention bien) avec un retard de 2 ans.</p>
        <a href="/cv-anizan-gatien.pdf" download="CV Anizan Gatien">Télécharger mon CV</a>
        <p>J'aime les nouvelle technologies et passer du bon temps avec mes amis. Ma passion est divisée entre mon amour pour la technologie et ma soif de créativité.</p>
        <p>J'aime coder à mes heures perdu, toujours chercher des nouvelle façons d'écrire du code de plus en plus optimisé. J'aime aussi jouer à quelques jeu vidéo et me perdre sur Reddit.</p>
        <p>Depuis ce jour je ne cesse d'apprendre de nouvelles technologies. Actuellement je suis entrain d'apprendre à manipuler le framework <b>react</b>. This website utilise le framework que je maitrise déjà, vue.js.</p>
      </div>
      <h2>Mes compétences</h2>
      <p>Je connais et j'utilise du Javascript, Typescipt, Pyhton, Swift, mongodb, nodejs et plus encore, mais mon environement favori est le Javascript.</p>

      <div class="skills-container">
        <h3>Développement fondamentaux</h3>

        <div class="skills">
          <div class="skill">
            <h4>HTML</h4>
            <div class="bar">
              <div class="fill html">100%</div>
            </div>
          </div>

          <div class="skill">
            <h4>CSS/SCSS</h4>
            <div class="bar">
              <div class="fill css">80%</div>
            </div>
          </div>

          <div class="skill">
            <h4>Linux</h4>
            <div class="bar">
              <div class="fill linux">70%</div>
            </div>
          </div>

          <div class="skill">
            <h4>MacOS</h4>
            <div class="bar">
              <div class="fill macos">99%</div>
            </div>
          </div>

          <div class="skill">
            <h4>Windows</h4>
            <div class="bar">
              <div class="fill windows">99%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3>Développement des bases de données</h3>

        <div class="skills">
          <div class="skill">
            <h4>MongoDB</h4>
            <div class="bar">
              <div class="fill mongo">70%</div>
            </div>
          </div>

          <div class="skill">
            <h4>MySQL</h4>
            <div class="bar">
              <div class="fill sql">40%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3>Développement orienté objet</h3>

        <div class="skills">
          <div class="skill">
            <h4>Javascript</h4>
            <div class="bar">
              <div class="fill js">99%</div>
            </div>
          </div>

          <div class="skill">
            <h4>Typescipt</h4>
            <div class="bar">
              <div class="fill ts">80%</div>
            </div>
          </div>

          <div class="skill">
            <h4>Pyhton</h4>
            <div class="bar">
              <div class="fill py">40%</div>
            </div>
          </div>

          <div class="skill">
            <h4>Swift</h4>
            <div class="bar">
              <div class="fill swift">40%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3>Framework front-end</h3>
        
        <div class="skills">
          <div class="skill">
            <h4>Vue.js</h4>
            <div class="bar">
              <div class="fill vue">70%</div>
            </div>
          </div>
          <div class="skill">
            <h4>React</h4>
            <div class="bar">
              <div class="fill react">40%</div>
            </div>
          </div>
          <div class="skill">
            <h4>Angular</h4>
            <div class="bar">
              <div class="fill angular">25%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3>Application professionnel</h3>

        <div class="skills">
          <div class="skill">
            <h4>Slack</h4>
            <div class="bar">
              <div class="fill slack">80%</div>
            </div>
          </div>
          <div class="skill">
            <h4>Git</h4>
            <div class="bar">
              <div class="fill git">80%</div>
            </div>
          </div>
          <div class="skill">
            <h4>Jira</h4>
            <div class="bar">
              <div class="fill jira">60%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-container">
        <h3>Autre</h3>

        <div class="skills">
          <div class="skill">
            <h4>Node.js</h4>
            <div class="bar">
              <div class="fill node">80%</div>
            </div>
          </div>
          <div class="skill">
            <h4>Docker</h4>
            <div class="bar">
              <div class="fill docker">50%</div>
            </div>
          </div>
          <div class="skill">
            <h4>Yarn</h4>
            <div class="bar">
              <div class="fill yarn">80%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Start extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

.desktop-only {
  display: block;
  @include md {
    display: none;
  }
}

.mobile-only {
  display: none;
  @include md {
    display: block;
  }
}

#start {
  display: flex;
  justify-content: center;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
  margin: 0 8px;
  
  .who-is {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 60px;
    @include md {
      margin-top: 10px;
      width: 100%;
      flex-basis: auto;
      .content {
        text-align: justify;
      }
    }

    a {
      display: inline-block;
      margin-top: 14px;
      margin-left: 4px;
      padding: 10px 20px;
      background: $text-pink;
      color: $text-white;
      box-shadow: #c8c8c8 2px 2px 5px;
      border-bottom: 0px solid $text-pink-black;
      border-right: 0px solid $text-pink-black;
      transition: all ease .2s;

      &:hover {
        margin-top: 10px;
        margin-left: 0;
        transition: all ease .2s;
        border-bottom: 4px solid $text-pink-black;
        border-right: 4px solid $text-pink-black;
      }
    }

    .mrpink {
      color: $text-pink;
    }

    p {
      margin-top: 10px;
      width: 100%;
      text-align: start;
    }

    small {
      padding-top: 5px;
    }

    h1 {
      font-weight: normal;
    }

    h2 {
      color: $text-pink;
      width: 100%;
    }

    .skills-container {
      align-self: start;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      h3 {
        margin-top: 30px;
        margin-bottom: 10px;
      }

      .skills {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;

        h4 {
          margin-top: 10px;
          margin-bottom: 5px;
        }

        .skill {
          padding: 0 10px;

          .bar {
            display: flex;
            width: 300px;
            height: 35px;
            border-radius: 0;
            background: lightgray;

            .fill {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              background: $text-pink;
              color: $text-white;

              &.html {
                width: 100%;
              }

              &.js, &.macos, &.windows {
                width: 99%;
              }

              &.css, &.git, &.node, &.slack, &.yarn, &.ts {
                width: 80%;
              }

              &.vue, &.linux, &.mongo {
                width: 70%;
              }

              &.jira {
                width: 60%;
              }

              &.docker {
                width: 50%;
              }

              &.py, &.sql, &.react, &.swift {
                width: 40%;
              }

              &.angular {
                width: 25%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
