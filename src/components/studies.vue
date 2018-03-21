<template lang="html">
  <div id="studies">
    <div class="row">
      <div class="left">
        <i class="fas fa-shipping-fast fa-5x"></i>
      </div>
      <div class="right">
        <p>By default</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#studies {
  display: flex;
  flex-wrap: nowrap;
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    margin: 8px;
    width: 100%;
    .left {
      flex-basis: 30%;
      align-items: center;
      justify-content: center;
      color: $text-grey;
      display: inline-flex;
      width: 25%;
    }
    .right {
      display: inline-flex;
      flex-basis: 70%;
    }
  }
}
</style>
