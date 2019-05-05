<template lang="html">
  <div id="start">
    <!-- <div class="picture">
      <img src="./../assets/visage.png" alt="">
    </div> -->
    <div class="who-is">
      <h1>Who is <span class="mrpink">Mr. Pink</span> ?</h1>
      <img src="./../assets/me.jpg" alt="A pic of me :)" height="200px">
      <small>Yeah that's realy me :)</small>
      <div class="content">
        <h3>Hi, my name is Gatien!</h3>
        <p>I like new technologies and having a good time with friends. My passion is divided between my love for technology and my thirst for creativity.</p>
        <p>My favorite time pass is coding, playing video games and getting lost on Reddit. I know Javascript, Typescipt, Pyhton, Swift, mongodb, nodejs and more, but my favorite environement is the Javascript. When I play video games I love playing to Factorio, Hacknet, Battlefield or League of Legend with my friends.</p>
        <p>In 2014 I learned to code. I preferred coding rather than learning my classes, that's why today I got my BAC (with honors) with a two years delay.</p>
        <p>Since that day I've been learning new technologies. Actualy I'm on <b>vue.js</b>, I love this framework. It's much more intuitive than Angular (for example), and the coding team is mutch more dovted to the task and that see! This website is coding on vue.js with vue-ui and Typescript.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Start extends Vue {}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

.desktop-only {
  display: block;
  @include md {
    display: none;
  }
}

.mobile-only {
  display: none;
  @include md {
    display: block;
  }
}

#start {
  display: flex;
  justify-content: center;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
  margin: 0 8px;
  .who-is {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    @include md {
      margin-top: 10px;
      width: 100%;
      flex-basis: auto;
      .content {
        text-align: justify;
      }
    }
    .mrpink {
      color: $text-pink;
    }
    p {
      margin-top: 10px;
    }
    small {
      padding-top: 5px;
    }
    h1 {
      font-weight: normal;
    }
  }
}
</style>
