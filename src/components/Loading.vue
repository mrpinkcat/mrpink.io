<template>
  <div class="loading">
    <p class="loading-text">{{comment}}</p>
    <ProgressBar :status='status' :total='total'/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProgressBar from '@/components/ProgressBar.vue';

@Component({
  components: {
    ProgressBar,
  },
})
export default class Loading extends Vue {
  @Prop() private comment!: number;
  @Prop() private total!: number;
  @Prop() private status!: number;
}
</script>

<style lang="scss">
@import '@/sass/mrpink.io.scss';

.loading {
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  .loading-text {
    justify-content: center;
    display: flex;
  }
}

</style>
