<template lang="html">
<div id="school">
  <h1>Formation</h1>
  <h2>CFA - UTEC</h2>
  <img src="https://www.utec77.fr/sites/files/public/video/home/004.jpg">
  <p>Je prépare un BTS en alternance au CFA UTEC à Avon.</p>
  <p>J’ai choisi de faire un BTS Services Informatiques aux Organisations dans la continuité de mon BAC Pro SEN option TR.</p>
  <p>J'avais déjà des bases de programation avant d'arriver en BAC Pro. Pendant ces deux années j'ai pu apprendre les bases du réseau en cours et continuer a apprendre à programer à coté.</p>
  <h2>Quelques chifres</h2>
  <ul>
    <li><b>2000</b> jeunes formés par an</li>
    <li><b>1500</b> stagiaires formés par an</li>
    <li><b>1500</b> entreprises partenaires</li>
    <li><b>85%</b> de taux de réussite aux examens en 2018</li>
    <li><b>82%</b> de taux d’insertion professionnelle à 6 mois</li>
    <li><b>5</b> sites UTEC</li>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class School extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

#school {
  margin: 0 10%;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }

  img {
    width: 50%;
    border: 2px solid $text-pink;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
}
</style>
