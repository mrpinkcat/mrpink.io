<template lang="html">
<div id="contacts">
  <h1>Me contacter</h1>
  <p>Vous pouvez me contacter par mail à <a href="mailto://gatien.anizan@gmail.com">gatien.anizan@gmail.com</a></p>
  <h2>Mes réseaux</h2>
  <p>Je dispose aussi de <a href="https://www.linkedin.com/in/anizan-g/" target="_blank">LinkedIn</a>, <a href="https://github.com/mrpinkcat/" target="_blank">GitHub</a> et d'<a href="https://www.instagram.com/gatien.anizan/" target="_blank">Instagram</a>.</p>
  <p>Comme nous pouvez le remarqué ils sont disposé dans la barre de navigation en haut à droite depuis le début de votre navigation sur ce site</p>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contacts extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

#contacts {
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
