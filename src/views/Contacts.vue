<template lang="html">
<div id="contacts">
  WIP :3
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contacts extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#contacts {
  margin: 0 8px;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
}
</style>
