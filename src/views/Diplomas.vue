<template lang="html">
  <div id="diplomas">
    WIP :3
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Diplomas extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#diplomas {
  margin: 0 8px;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
}
</style>
