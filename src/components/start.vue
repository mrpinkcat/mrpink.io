<template lang="html">
  <div id="start">
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
    </div>
    <div class="picture">

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
  padding-top: 50px + (8px * 2);
  @media (max-width: 576px) {
    padding-top: 80px + (8px * 2);
  }
  margin: 0 8px;
  .who-is {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding-left: 40px;
    @media (max-width: 576px) {
      margin-top: 10px;
      padding-left: 0;
      width: 100%;
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
  }
  .picture {

  }
}
</style>
