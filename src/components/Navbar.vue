<template>
<div class="navbar">
  <div class="nav-left">
    <router-link to="/" tag='div' class="title">
    MrPink.io
    <i class="fas fa-male fa-sm"></i>
    </router-link>
  </div>
  <div class="nav-right">
    <router-link v-for='link in navInfo.routerLinksNav' :key='link.path' :to='link.path' tag='button'>{{link.displayName}}</router-link>
    <!-- <a v-if="$route.name != 'Start'" class="icon" href="https://www.linkedin.com/in/anizan-g/" target="blank">
      <i class="fab fa-linkedin fa-lg"></i>
    </a>
    <a v-if="$route.name != 'Start'" class="icon" href="https://github.com/mrpinkcat" target="blank">
      <i class="fab fa-github-alt fa-lg"></i>
    </a> -->
    <a v-for='link in navInfo.routerLinksExt' :key='link.url' class="icon" :href='link.url' target="blank">
      <i class="fab fa-lg" :class='link.icon'></i>
    </a>
  </div>
</div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop() private navInfo!: any;
}
</script>

<style lang="scss">
@import '../sass/mrpink.io';

$nav-height: 50px;

.navbar {
  user-select: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 8px;
  padding: 0 35px;
  height: $nav-height;
  background: #e5e9ea;
  border-radius: 6px;
  color: $text-dark;
  transition-duration: 0.2s;
  position: fixed;
  top: 0;
  width: calc(100% - (8px * 2) - (35px * 2));
  .nav-left {
    display: flex;
    align-items: center;
    .title {
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
      color: $text-pink;
      svg {
        margin-left: 10px;
        transition-duration: 0.2s;
      }
      &:hover {
        svg {
          transform: scale(1.75) rotate(15deg);
        }
      }
      &.router-link-exact-active {
        svg {
          transform: scale(1.75);
        }
      }
    }
  }
  .nav-right {
    display: flex;
    align-items: center;
    button {
      height: $nav-height - 20px;
      font-weight: 700;
      padding: 0 10px;
      font-family: $font;
      background-color: transparent;
      transition-duration: 0.2s;
      &:hover {
        transform: scale(1.15);
        color: $text-pink;
      }
      &.router-link-exact-active {
        transform: scale(1.15);
        color: $text-pink;
      }
    }
    .icon {
      color: $text-dark;
      height: $nav-height - 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 0.2s;
      min-width: 40px;
      &:hover {
        transform: scale(1.15) rotate(15deg);
        color: $text-pink;
      }
      &:visited {
        color: $text-dark;
        &:hover {
          color: $text-pink;
        }
      }
    }
  }
  @media (max-width: $breakpoint-small) {
    flex-direction: column;
    height: auto;
    justify-content: space-around;
    padding: 0;
    width: calc(100% - (8px * 2));
    .nav-left {
      height: 50px;
      .title {
        &:hover {
          svg {
            transform: none;
          }
        }
        &.router-link-exact-active {
          svg {
            transform: scale(1.75) rotate(15deg);
          }
        }
      }
    }
    .nav-right {
      max-width: 95%;
      overflow-x: auto;
      button {
        &:hover {
          transform: none;
          color: $text-dark;
        }
        &.router-link-active {
          transform: scale(1.15);
          color: $text-pink;
        }
      }
      .icon {
        &:hover {
          transform: none;
          color: $text-dark;
        }
        &:visited {
          color: $text-dark;
          &:hover {
            color: $text-pink;
          }
        }
      }
    }
  }
}
</style>
