<script setup>
import CommentBox from'../Comments/CommentBox.vue'
</script>
<template>
    
<div class = "container" style = "padding-top: 2%;">
  <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-image: url('https://preview.redd.it/hlqjaydevle21.jpg?auto=webp&s=cea511099ae06be780d821a423f5c4ce79f78cd7');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
          <h1 class="display-3" style = "color: peachpuff ;text-shadow:1px 2px rgb(0, 0, 0);font-weight:bold">Browse</h1>
          <p class="lead" style = "color: peachpuff; text-shadow:1px 1px rgb(0, 0, 0) ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printable</p>
          <div  class="container" >
              <div class="d-flex justify-content-between" >
                  <RouterLink class="btn btn-primary btn-lg" style = "padding-left: 45px;padding-right: 45px;" to="/CommunityHub" role="button">Return</RouterLink>
              </div>
          </div>
      </div>
    <form>
        <div class = "container" style = "padding-top: 2%;">
            <div class="input-group mb-3">
        <input id ='searchBar' type="text" class="form-control" placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="searchQuery" >
        <span class="input-group-text" id="basic-addon2">Search</span>
    </div>
    </div>
    </form>

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

  <!-- end new stuff. -->
 <!--
    <div class = "p-3 border bg-light">
        <div class="d-flex justify-content-between" style = "padding-top: 2%;">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ="https://www.sciencesandtechnology.com/wp-content/uploads/2019/07/3d-printed-lattice-850x600.jpg" alt="Card image cap">
                <div class="card-body">
                    <h1>PolyMesh</h1>
                    <p> print your own poly mesh with 10x structural integrity </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1' alt="Card image cap">
                <div class="card-body">
                    <h1>4th dimensional desk object</h1>
                    <p> Print in PLA white for best results </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>
            
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src ='https://i2.wp.com/northerngeometry.com/wp-content/uploads/2021/04/3D_Print_TREX_SKULL_Mask-1.png?w=1680' alt="Card image cap">
                <div class="card-body">
                    <h1>Dino Head</h1>
                    <p> Become prehistoric </p>
                    <hr class="my-4">
                    <a class="btn btn-outline-primary"  href="#" role="button">Download</a>
                    <comment-box @submitComment="handleCommentSubmission"></comment-box>
                </div>
            </div>
                
        </div> 
      </div>
    </DIV>
    -->
  </template>
  
  <script>

        import axios from 'axios';
        import { ref } from 'vue';

        export default {
        name: 'browsePosts',
        };
            const postData = ref([]);
            const searchQuery = ref('');
            
            axios.get('http://localhost:8090/api/posts/findAll').then((response) => {
            postData.value = response.data;
            })
            .catch((error) => {
              // Handle the error here, e.g., log it or show an error message to the user
              console.error('An error occurred:', error);
            });

           
        
</script>
  <style>

  #favourites:hover {
    cursor: pointer;
    background-image: url("../../assets/star-2768.png");
  }
  
  </style>