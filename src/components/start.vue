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
        <p>Hi, my name is Gatien ! I like new technologies and having a good time with friends. My passion is divided between my love for technology and my thirst for creativity.</p>
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

#start {
  display: flex;
  flex-direction: row-reverse;
  padding-top: 50px + (8px * 2);
  @media (max-width: $breakpoint-small) {
    padding-top: 80px + (8px * 2);
  }
  @media (max-width: $breakpoint-medium) {
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
    @media (max-width: $breakpoint-medium) {
      margin-top: 10px;
      padding-left: 0;
      width: 100%;
      flex-basis: auto;
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
    @media (max-width: $breakpoint-medium) {
      max-width: none;
      img {
        height: 250px;
        transform: none;
      }
    }
  }
}
</style>
