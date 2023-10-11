<script setup>
// import CommentBox from '../Comments/CommentBox.vue'
</script>
<template>
  <div class="container" style="padding-top: 2%;">
    <div class="container">
    <div class="jumbotron text-white">
      <h3>Succotash Products</h3>
      <p>Products on the succotash store</p>
    </div>
  </div>
    

    <div class="container" style="padding-top: 2%;">
      <div class="row">
        <!-- Loop through postData and create a card for each post -->
        <div v-for="post in postData" :key="post.productId" class="col-md-4">
          <div class="card" style="margin-bottom: 20px;">
            
            <div class="card-body">
                <img class="card-img-top" :src="'http://localhost:8090' + post.imageLocation" alt="Card image cap">
              <br>
              <br>
                <h5 class="card-title">Product Name: {{ post.productName }}</h5>
              <p class="card-text"> Description: {{ post.description }}</p>
              <p class="card-text">Price: ${{ post.price }}</p>
              <p class="card-text">Product ID: {{ post.productId }}</p>
              <div class="d-flex justify-content-between">
              
                <div class="favorites-icon">
                  <!-- you can add a V-if, after you axios-get all the users current favourites such that. 

                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                  <!--Mohammed has edited the below image tag to call the addToFavorits method for his feature-->
                  
                </div>
              </div>
              
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
  name: 'viewProducts',
  data() {
    return {
     postComments: {},
     favoritePost: { // Define favoritePost here
        userId: 0, // You can set default values if needed
        postId: 0
      },
      // ... other data properties ...
    };
  },

  methods: {
    getCommentsForPost(postId) {
      axios.get(`http://localhost:8090/api/comment/getByPost?postId=${postId}`)
        .then((response) => {
          const postComments = response.data;
          console.log(postComments)
          this.postComments[postId] = response.data;
        })
        .catch((error) => {
          // Handle any errors that may occur during the request
          console.error(error);
        });
      },
    getAllComments(){
      axios.get('http://localhost:8090/api/comment/getAllComments')
  .then((response) => {
    const commentsList = response.data;
    this.postComments = response.data;

    // Iterate through the comments and print them
    commentsList.forEach((comment) => {
      console.log("That me ", comment.commentText); // This will print each comment object to the console
    });
  })
  .catch((error) => {
    // Handle any errors that may occur during the request
    console.error(error);
  });

    },
    handleCommentSubmission(int, commentText) {
      try {
        const postData = {
      postId: int,
      userId: 3, //I will change this once user scomes online in the database 
      commentText: commentText,
    };
    console.log(postData)
    const response = axios.post('http://localhost:8090/api/comment/create', postData);
        // Assuming your server responds with a success message
        console.log('Comment posted successfully', response.data);

        // Reset the comment input field
        this.comment = '';
      } catch (error) {
        // Handle errors (e.g., display an error message to the user)
        console.error('Error posting comment testtest', error);
      }
    },


    addCommentToPost(commentText, postId) {
      console.log(commentText)
      console.log(postId)
    },
    addToFavorites(postId, userId) {
      // Log the postId and userId when the favorites icon is clicked
      console.log('Post Id:', postId);
      console.log('User ID:', userId);

      // Create the favoritePost object
      const favoritePost = {
        userId: userId,
        postId: postId
      };
      /* printFaveList */
      axios.post('http://localhost:8090/api/favoritePosts/printFaveList').then((response) => {
        console.log("Post ID List: " + response.data.FavePostsList)
      });
      console.log('Request URL:', 'http://localhost:8090/api/favoritePosts/addPosts');
      console.log('Request Data:', favoritePost);
      console.log('favorites post ID: ' + favoritePost.postId);
      console.log('Favorites User ID: ' + favoritePost.userId);
      // Make an Axios POST request to add the favorite post
      axios.post('http://localhost:8090/api/favoritePosts/addPost', favoritePost)
        .then((response) => {
          console.log('Favorite post added:', response.data.data);
          console.log('message received: ' + response.data.messages);
          //reloading the data
          this.fetchData();
          // You can add additional logic here, such as updating the UI to reflect the favorite status.
        })
        .catch((error) => {
          console.error('Error adding favorite post:', error);
        });
    },
    // ... other methods ...
    fetchData() {
    // Fetch data again from the server and update the 'postData' ref
    axios.get('http://localhost:8090/api/posts/findAll')
      .then((response) => {
        postData.value = response.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    },
    // ... other methods ...
  },
  

};

const postData = ref([]);


axios.get('http://localhost:8090/api/products/findAll').then((response) => {
  postData.value = response.data;
  console.log(postData.value.productId);
});



</script>
<style>
#favourites:hover {
  cursor: pointer;
  background-image: url("../../assets/star-2768.png");
}
</style>