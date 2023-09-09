//:p Html Nav bar with 4 plain options

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Shop">Shop</router-link> |
    <router-link to="/CommunityHub">Community Hub</router-link> |
    <router-link to="/MyAccount">My Account</router-link> |
    <router-link to="/LogoutCard">Logout</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
}
</style>
