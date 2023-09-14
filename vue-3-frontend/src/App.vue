//:p Html Nav bar with 4 plain options

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

</script>

<template>
  <!-- Nav bar Items  -->
  <div class="wrapper" style="background-color: moccasin;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/Home">Home</RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Shop">Shop</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/CommunityHub">Community Hub</RouterLink>
            </li>


            <!-- Drop down Menu  -->
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  (Username Here)
                </button>
                <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton1">
                  
                  <li>
                    <RouterLink class="dropdown-item" to="/MyAccount">Profile</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/favouritePosts">View Favourites</RouterLink>
                  </li>

                  <li>
                    <RouterLink class="dropdown-item" to="/ManageProducts">Manage Products</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/LogoutCard">Logout</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}



</script>

<style></style>
