<script setup>
import CommentBox from '../Comments/CommentBox.vue'
</script>
<template>
  <div class="container" style="padding-top: 2%;">
    <div class="jumbotron"
      style="border-radius: 6px; padding: 2%;background-image: url('https://preview.redd.it/hlqjaydevle21.jpg?auto=webp&s=cea511099ae06be780d821a423f5c4ce79f78cd7');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
      <h1 class="display-3" style="color: peachpuff ;text-shadow:1px 2px rgb(0, 0, 0);font-weight:bold">Browse</h1>
      <p class="lead"
        style="color: peachpuff; text-shadow:1px 1px rgb(0, 0, 0) ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
        Find your favourite 3D printable</p>
      <div class="container">
        <div class="d-flex justify-content-between">
          <RouterLink class="btn btn-primary btn-lg" style="padding-left: 45px;padding-right: 45px;" to="/CommunityHub"
            role="button">Return</RouterLink>
        </div>
      </div>
    </div>
    <form>
      <div class="container" style="padding-top: 2%;">
        <div class="input-group mb-3">
          <input id='searchBar' type="text" class="form-control" placeholder="Search by title"
            aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="searchQuery">
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
              <p>User ID: {{ post.userId }}</p>
              <p class="card-text">{{ post.description }}</p>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary">Download</a>
                <div class="favorites-icon">
                  <!-- you can add a V-if, after you axios-get all the users current favourites such that. 
                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                <!--Mohammed has edited the below image tag to call the addToFavorits method for his feature-->
                  <img id="favourites" src="../../assets/favourite-2765.png" @click="addToFavorites(post.postId, post.userId)">
                </div>
              </div>
              <comment-box @submitComment="handleCommentSubmission"></comment-box>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'browsePosts',
  // ...
  data() {
    return {
      
      // ... other data properties ...
    };
  },

  methods: {
  addToFavorites(postId, userId) {
    // Log the postId and userId when the favorites icon is clicked
    console.log('Post Id:', postId);
    console.log('User ID:', userId);

    // Create the favoritePost object
    const favoritePost = {
      userId: userId,
      postId: postId
    };

    console.log('Request URL:', 'http://localhost:8090/api/favoritePosts/addPosts');
    console.log('Request Data:', favoritePost);

    console.log('favorites post ID: ' + favoritePost.postId);
    console.log('Favorites User ID: ' + favoritePost.userId);
    // Make an Axios POST request to add the favorite post
    axios.post('http://localhost:8090/api/favoritePosts/addPost', favoritePost)
      .then((response) => {
        console.log('Favorite post added:', response.data.data);
        console.log('message is ' + response.data.messages);
        // You can add additional logic here, such as updating the UI to reflect the favorite status.
      })
      .catch((error) => {
        console.error('Error adding favorite post:', error);
      });
  },
  // ... other methods ...
},

};

const postData = ref([]);
const searchQuery = ref('');

axios.get('http://localhost:8090/api/posts/findAll').then((response) => {
  postData.value = response.data;
});



</script>
<style>
#favourites:hover {
  cursor: pointer;
  background-image: url("../../assets/star-2768.png");
}
</style>