<template>
  <div>
    <NavBar />
    <router-view />
  </div>
  <!-- <PostComp/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PostComp from './components/PostComp.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
