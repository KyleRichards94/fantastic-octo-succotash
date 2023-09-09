//:p Html Nav bar with 4 plain options

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <div class="p-3 mb-2 bg-white text-dark">

<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<RouterLink class="navbar-brand" to="/Shop">Home</RouterLink>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <RouterLink class="nav-link" to="/Shop">Shop</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link" to="/CommunityHub">Community Hub</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link" to="/MyAccount">Account</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link" to="/LogoutCard">Logout</RouterLink>
  </li>
</ul>
</div>
</div>
</nav>
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




</style>
