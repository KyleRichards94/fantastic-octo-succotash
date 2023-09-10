
<script setup>
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<div>
    <header>
      <!-- Header content -->
    </header>
    <main>
<br>

<body class="favouritePostsPage">
<div class="container" >
  <div class="jumbotron">
    <h1 style="color: black;">Favourite Posts</h1>      
  </div>  
  <hr/>

  <div style="overflow-y: auto;">
    <div class="container">
  <ul class="vertical-list">
    <li class="ImgBox">
      <ul>
        <li class="box">
          <img src="https://www.sciencesandtechnology.com/wp-content/uploads/2019/07/3d-printed-lattice-850x600.jpg">
          <h1>PolyMesh</h1>
          <p>Print your own poly mesh with 10x structural integrity</p>
        </li>
        <li class="box">
          <img src="https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680">
          <h1>Dino Head</h1>
          <p>Become prehistoric</p>
        </li>
        <li class="box">
          <img src="https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1">
          <h1>4th dimensional desk object</h1>
          <p>Print in PLA white for best results</p>
        </li>
      </ul>
    </li>
  </ul>
</div>
</div>

<br>
<br>
</div>
</body>
       <!-- <router-view></router-view>Default router view -->
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script>
export default {
    name: 'favouritePosts'
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
.vertical-list {
  display: flex;
  flex-direction: column;
}

.vertical-list li {
  display: flex;
  flex-direction: column;
}
.box {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: rgb(35, 36, 37);
  width: 50%; /* Adjust the width as needed */
  height: 50%; /* Adjust the height as needed */
  color: white;
}




</style>