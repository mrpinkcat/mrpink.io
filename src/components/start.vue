<template lang="html">
  <div id="start">
    <div class="terminal">
      <div class="head">
        <div class="buttons">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
        <div class="title">
          MrPink.io
        </div>
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

#start {
  display: flex;
  justify-content: center;
  .terminal {
    margin-top: 70px;
    background: #2c3e50;
    padding: .75rem;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    .head {
      display: flex;
      .buttons {
        display: flex;
        align-items: center;
        div {
          width: 11px;
          height: 11px;
          margin-right: 9px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .red {
          background: #ff5f56;
        }
        .yellow {
          background: #ffbd2e;
        }
        .green {
          background: #28ca41;
        }
      }
      .title {
        color: $text-white;
        display: flex;
        flex-grow: 1;
        justify-content: center;
      }
    }
  }
}
</style>
