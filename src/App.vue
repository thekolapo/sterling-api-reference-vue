<template>
  <div id="app">
   <!-- <home-page></home-page> -->
   <router-view></router-view> 
  </div>
</template>

<script>
import Home from './Home.vue';

export default {
  name: 'app', 
  components: {
    homePage: Home
  }
}
</script>

<style lang="scss">
@import "./assets/styles/sass/fonts";
</style>
