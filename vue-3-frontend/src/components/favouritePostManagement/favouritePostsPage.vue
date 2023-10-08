<script setup>
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class = "container" style = "padding-top: 2%;">
  
  <div class="container">
    <div class="jumbotron text-white">
      <h3 class="text-white">Favourite Posts</h3>
      <p>Here you can view all your saved posts in one place!
      </p>
    </div>
  </div>

  <div class="container" style="padding-top: 2%;">
    <div class="row">
      <!-- Loop through postData and create a card for each post -->
      <div v-for="post in postData" :key="post.postId" class="col-md-4">
        <div class="card" style="margin-bottom: 20px;">
          
          <img class="card-img-top" :src="'http://localhost:8090' + post.imagePath" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <div class ="d-flex justify-content-between"  >
            <a href="#" class="btn btn-primary">Download</a>
              <div class ="favorites-icon">
                <!-- you can add a V-if, after you axios-get all the users current favourites such that. 
                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                <img id = "favourites" src ="../../assets/favourite-2765.png" onclick="addFavourites" >
              </div>
            </div>
            <comment-box @submitComment="handleCommentSubmission"></comment-box>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- New cards system that uses the axios pipeline to get all from the database -->
  

</div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: "favouritePosts",
};

const postData = ref([]);

//using the posts API to get all the data in the posts table
axios.get('http://localhost:8090/api/posts/findAll').then((response) => {
  //then saving the response we receive in an array or list
  postData.value = response.data;
});

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
  padding-right: 10px;
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
h1 {
  font-family: 'Orbitron', sans-serif;
}

</style>
