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
      <div class="content">
        <p v-for="log of logs" :key="log" class="command">{{log}}</p>
      </div>
      <div class="footer">
        <p>➜</p>
        <input v-on:keyup.enter="addLog()" v-model="consoleText">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consoleText: undefined,
      logs: [],
    };
  },
  methods: {
    addLog() {
      if (this.consoleText) {
        this.logs.push(this.consoleText);
        this.consoleText = '';
      }
    },
  },
};
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#start {
  display: flex;
  justify-content: center;
  .terminal {
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    background: #2c3e50;
    width: 650px;
    height: 450px;
    border-radius: 10px;
    color: $text-white;
    .head {
      display: flex;
      margin: .75rem;
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
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-grow: 1;
      margin: 0 1rem 1rem 1rem;
      overflow: hidden;
      // height: 351px;
      p {
        margin: .25rem 0;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      flex-basis: 40px;
      min-height: 40px;
      padding: 0 1rem;
      border-top: 1px solid #354e67;
      input {
        flex-grow: 1;
        padding: 0;
        margin-left: 5px;
        caret-color: $text-white;
        background: transparent;
        color: $text-white;
        outline: none;
        font-size: 1rem;
      }
    }
  }
}
</style>
