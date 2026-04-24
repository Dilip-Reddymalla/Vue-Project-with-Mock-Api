<template>
  <div id="app">
    <NavBar />
    <main class="router-panel">
      <router-view />
    </main>
  </div>
  <!-- <PostComp/> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Manrope", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
