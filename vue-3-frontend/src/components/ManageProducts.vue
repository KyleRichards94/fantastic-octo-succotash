
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<div>
    <header>
      <!-- Header content -->
    </header>
    <main>
<br>
<div class="container">
  <div class="jumbotron text-white">
    <h1>Product Management Console</h1>      
  </div>  
  <hr/>
  <div class="btn-group" role="group">
  <RouterLink class="btn btn-dark" to="/addProduct">Add Product</RouterLink>
  <RouterLink class="btn btn-dark" to="/editProduct">Edit Product</RouterLink>
  <RouterLink class="btn btn-dark" to="/deleteProduct">Delete Product</RouterLink>
  <RouterLink class="btn btn-dark" to="/viewProducts">View Products</RouterLink>
</div>
<br>
<br>
</div>
      <router-view></router-view> <!-- Default router view -->
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script>
export default {
    name: 'ManageProducts'
}
</script>

<style>
  form {
    width: 500px;
    margin: 0 auto; /* Center the form horizontally */
    padding: 20px; /* Add some padding for better appearance */
    border: 1px solid #ccc; /* Optional: Add a border for visual separation */
    background-color: white; /* Optional: Add background color */
  }
input {
    width: 100%;
}
span {
    display: block;
    overflow: hidden;
    padding-right:10px;
}
button {
    float: middle;
}
</style>