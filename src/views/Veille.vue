<template lang="html">
<div id="veille">
  <h1>Veille</h1>
  <h2>Panda</h2>
  <a href="https://usepanda.com/">usepanda.com</a>
  <div class="images">
    <img src="./../assets/screen-veille-1.png">
    <img src="./../assets/screen-veille-2.png">
  </div>
  <p>Pour la veille j'utilise Panda. C'est un outil tres pratique, toutes les info sont centralisées.</p>
  <h3>Centres d'intérêts :</h3>
  <ul>
    <li>Développement Front-End</li>
    <li>Développement Back-End</li>
    <li>Développement iOS</li>
    <li>Base de données</li>
    <li>Hardware</li>
    <li>Nouvelles technologies</li>
  </ul>
  <h1>Veille Juridique</h1>
  <h2>Google News</h2>
  <a href="https://news.google.com/search?tbm=nws&q=protection+des+donnees&oq=protection+des+donnees&hl=fr&gl=FR&ceid=FR:fr">news.google.com</a>
  <div class="images">
    <img src="./../assets/screen-veille-3.png">
  </div>
  <p>Pour la veille juridique j'utilise Google News. C'est un basique mais qui me suffit, toutes les info sont aussi centralisées.</p>
  <h3>Centres d'intérêts :</h3>
  <ul>
    <li>Protection des données</li>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Veille extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

#veille {
  margin: 0 10%;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }

  .images {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    img {
      width: 48%;
      border: 2px solid $text-pink;
      margin-bottom: 10px;
    }
  }

  p {
    margin-bottom: 10px;
  }
}
</style>
