<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Post">Post Data</router-link>
    <router-link to="/Get">Get Data</router-link>
    <router-link to="/Put">Update Data</router-link>
    <router-link to="/Delete">Delete Data</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>

<style scoped>
.nav {
  background-color: lightblue;
  padding: 15px;
}

a {
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.router-link-exact-active {
  color: red;
}
</style>
