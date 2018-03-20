<template>
  <div id="app">
    <div class="navbar">
      <div class="nav-left">
        <router-link to="/" tag='div' class="title">MrPink.io</router-link>
      </div>
      <div class="nav-right">
        <router-link to="projects" tag='button'>Projects</router-link>
        <router-link to="studies" tag='button'>Studies</router-link>
        <router-link to="contacts" tag='button'>Contacts</router-link>
        <div class="icon">
          <i class="fab fa-linkedin fa-lg"></i>
        </div>
        <div class="icon">
          <i class="fab fa-github-alt fa-lg"></i>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './sass/mrpink.io';

#app {
  .navbar {
    $nav-height: 50px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 8px;
    padding: 0 35px;
    height: $nav-height;
    background: $pink;
    border-radius: 6px;
    color: $text-dark;
    transition-duration: .2s;
    .nav-left {
      display: flex;
      align-items: center;
      .title {
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
      }
    }
    .nav-right {
      display: flex;
      align-items: center;
      button {
        height: $nav-height;
        font-weight: 700;
        padding: 0 10px;
        font-family: $font;
        background-color: transparent;
        transition-duration: .2s;
        &:hover {
          transform: scale(1.15);
          color: $text-pink;
        }
        &.router-link-active {
          font-size: 1.15rem;
          color: $text-pink;
        }
      }
      .icon {
        height: $nav-height;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: .2s;
        width: 40px;
        &:hover {
          transform: scale(1.15) rotate(15deg);
          color: $text-pink;
        }
      }
    }
  }
}
</style>
