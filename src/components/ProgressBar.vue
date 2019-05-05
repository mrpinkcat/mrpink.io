<template>
  <div class="progress-bar">
    <div class="bar" :style="{ width: status/total*300 + 'px' }"><span  v-if='!status'>0</span><span v-if='status'>{{status/total*100}}</span>%</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProgressBar extends Vue {
  @Prop() private total!: number;
  @Prop() private status!: number;
}
</script>

<style lang="scss">
@import '@/sass/mrpink.dev.scss';

.progress-bar {
  background: $grey;
  width: 300px;
  display: inline-flex;
  align-items: center;
  .bar {
    font-size: 0.70em;
    background: $text-pink;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
}

.progress-bar, .bar {
  height: 15px;
  border-radius: 8px;
}
</style>
