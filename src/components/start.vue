<template lang="html">
  <div id="start">
    <div class="picture">
      <img src="./../assets/visage.png" alt="">
    </div>
    <div class="who-is">
      <h1>Who is Mr. Pink ?</h1>
      <div class="social-links">
        <div v-for="link of links"
          :key="link.name"
          class="link"
          v-bind:class="{ 'link-separator' : !link.last }">
          <a :href="link.link" target="_blank" >{{ link.name }}</a>
        </div>
      </div>
      <div class="content">
        <p>Hi, my name is Gatien! <br class="mobile-only"><br class="mobile-only">I like new technologies and having a good time with friends. My passion is divided between my love for technology and my thirst for creativity.</p>
        <p>I'm curious! And that is what allows me today to offer you this magnificent website! What I also like are the concrete and important things. So I made my list of what is important and concrete about me!</p>
        <ul>
          <li>I'm a man</li>
          <li>I love cats</li>
          <li>I got a driver's license and a car!</li>
          <li>I am (future) bachelor 2018</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/anizan-g/' },
        { name: 'GitHub', link: 'https://github.com/mrpinkcat' },
        { name: 'Facebook', link: 'https://www.facebook.com/gatien.anizan' },
        { name: 'Twitter', link: 'https://twitter.com/MrPink_AG', last: true },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './../sass/mrpink.io';

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
  flex-direction: row-reverse;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }
  @include md {
    flex-direction: column;
  }
  margin: 0 8px;
  .who-is {
    display: flex;
    flex-basis: 60%;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding-left: 40px;
    @include md {
      margin-top: 10px;
      padding-left: 0;
      width: 100%;
      flex-basis: auto;
      .content {
        // text-align: justify;
      }
    }
    h1 {
      font-weight: normal;
    }
    .social-links {
      margin-top: .5rem;
      display: flex;
      .link {
        a {
          display: inline-block;
          margin: 0 6px;
          &:visited {
            color: $text-dark;
          }
        }
        &.link-separator {
          border-right: 2px solid $grey;
        }
      }
    }
    .content {
      margin-top: 25px;

    }
  }
  .picture {
    display: inline-flex;
    justify-content: center;
    flex-basis: auto;
    img {
      transform: scale(.85);
    }
    @include md {
      max-width: none;
      display: none;
    }
  }
}
</style>
