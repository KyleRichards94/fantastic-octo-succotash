<script setup>
// import voteMap from './my-map.js';
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
      <p class="lead" style="color: White; text-align: center;text-shadow:1px 1px rgb(0, 0, 0) ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
        Sort Post by Upvotes</p>
      <div class="container d-flex justify-content-center mb-3">
        
        <button @click="sortPostsByUpvotesDescending" class="btn btn-primary"> Lowest to Highest </button>
        <button @click="sortPostsByUpvotesAscending" class="btn btn-primary">Highest to Lowest</button> </div>
      <div class="row">
        
        <!-- Loop through postData and create a card for each post -->
        <div v-for="post in filteredPosts " :key="post.postId" class="col-md-3">
          <div class="card" style="margin-bottom: 20px;">

            <img class="card-img-top" :src="'http://localhost:8090' + post.imagePath" alt="Card image cap">
            <router-link :to="{ name: '3DviewPort', params: { objFilePath: post.objFilePath, postId: post.postId } }">View
              3D Model</router-link>
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <h5 class="card-title">Upvotes {{ post.votes }}</h5>
              <!-- {{ this.$store.getters['user/user'].userID }} -->

              <p class="card-text">{{ post.description }}</p>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary">Download</a>
                <div class="favorites-icon">
                  <!-- you can add a V-if, after you axios-get all the users current favourites such that. 

                if post.id.in(favourites) then <img src = " "../../assets/star-2768.png""> -->
                  <!--Mohammed has edited the below image tag to call the addToFavorits method for his feature-->
                  <img id="favourites" src="../../assets/favourite-2765.png"
                    @click="addToFavorites(post.postId, post.userId)" style="width: 24px;">
                </div>
              </div>
              <input v-model="comment" type="text" class="form-control" placeholder="Add a comment">
              <button @click="handleCommentSubmission(post.postId, comment)" class="btn btn-primary">Submit</button>
              <div></div>
              <div></div>
              <button @click="upvotePost(post.postId)" class="btn btn-primary">+1</button>
              <button @click="downvotePost(post.postId)" class="btn btn-primary">-1</button>
              <h5>Comments</h5>
              <div v-if="postComments[post.postId]">
                <div v-for="comment in postComments[post.postId]" :key="comment.commentId">
                  <p> {{ comment.commentText }}</p>
                  <p> <b>Posted on:</b> {{ comment.commentDate }}</p>
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
  async mounted() {
    const response = await axios.get('http://localhost:8090/api/posts/posts/getAllPostIds');
    this.apiData = response.data;
    for (let i = 0; i < this.apiData.length; i++) {
      this.getCommentsForPost(this.apiData[i]);
    }

  },
  computed: {
    postIdlist() {
      if (this.searchQuery.length > 0) {
        const filtered = postData.value.filter(post => post.postId < 5);
        return filtered;
      } const filtered = postData.value.filter(post => post.postId > 5);

      return filtered;
    },
    filteredPosts() {


      const query = this.searchQuery.toLowerCase(); // Convert the query to lowercase for case-insensitive search
      const filtered = postData.value.filter(post => {
        // Include the condition to check if the search query is present in the post's title
        return post.title && post.title.toLowerCase().includes(query);
      });
      return filtered;
    }
  },
  name: 'browsePosts',
  data() {
    return {
      voteMap,
      downvoteMap,
      searchQuery: '',
      postComments: {},
      favoritePost: { // Define favoritePost here
        userId: 0, // You can set default values if needed
        postId: 0
      },
      // ... other data properties ...
    };
  },

  methods: {
    // createVoteHashMap() {
    //   console.log("I ran ",)
    //   const voteMap = new Map();
    //   voteMap.set('key1', 'value1');
    //   voteMap.set('key2', 'value2');
    //   console.log(voteMap.get('key1'));
    // },
    sortPostsByUpvotesDescending() {
    postData.value.sort((a, b) => a.votes - b.votes);
    },
    sortPostsByUpvotesAscending() {
    postData.value.sort((a, b) => b.votes - a.votes);
    },
    
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
    redrawCommentsForPost(postId) {
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

    fetchCommentData() {
      // Fetch data again from the server and update the 'postData' ref
      axios.get('http://localhost:8090/api/posts/findAll')
        .then((response) => {
          postData.value = response.data;

          // Get all comments for all posts
          Object.keys(response.data).forEach((postId) => {
            this.getCommentsForPost(postId);
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    getAllComments() {
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
    async fetchDataFromAPI() {
      try {
        const response = await axios.get('http://localhost:8090/api/posts/posts/getAllPostIds');
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      }
    },
    async handleCommentSubmission(int, commentText) {
      try {
        const postData = {
          postId: int,
          userId: 3, //I will change this once user scomes online in the database
          commentText: commentText,
        };

        // Post the comment to the server.
        const response = await axios.post('http://localhost:8090/api/comment/create', postData);

        // Fetch the updated list of comments from the server.
        setTimeout(this.getCommentsForPost(int), 2000)
        // Assuming your server responds with a success message
        console.log('Comment posted successfully', response.data);

        // Reset the comment input field.
        this.comment = '';
      } catch (error) {
        // Handle errors 
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
    async upvotePost(postId) {
      const userID = this.$store.getters['user/user'].userID;

      if (voteMap.has(postId)) {
        console.log('User has already upvoted this post');
      } else {
        try {
          // I love hashmaps
          voteMap.set(postId, userID);
          if(downvoteMap.has(postId)){
            downvoteMap.delete(postId);
          }
          const response = await axios.post(`http://localhost:8090/api/posts/posts/upvotePost?postId=${postId}`);
          const updatedPost = postData.value.find((post) => post.postId === postId);
          updatedPost.votes++; // Increment the vote count

          // Success message
          console.log('Post upvoted successfully', response.data);
        } catch (error) {
          // Handle errors
          console.error('Error upvoting post', error);
        }
      }
    },
    async downvotePost(postId) {

      const userID = this.$store.getters['user/user'].userID;

      if (downvoteMap.has(postId)) {
        console.log('User has already upvoted this post');
      } else {
        try {
          // Assuming voteMap is a global Map
          downvoteMap.set(postId, userID);
          if(voteMap.has(postId)){
            voteMap.delete(postId);
          }
          const response = await axios.post(`http://localhost:8090/api/posts/posts/downvotePost?postId=${postId}`);
          const updatedPost = postData.value.find((post) => post.postId === postId);
          updatedPost.votes--; // Decrease the vote count

          // Success message
          console.log('Post upvoted successfully', response.data);
        } catch (error) {
          // Handle errors 
          console.error('Error upvoting post', error);
        }
      }
    }
  },


};

const postData = ref([]);
// const searchQuery = ref('');
const voteMap = new Map();
const downvoteMap = new Map();

axios.get('http://localhost:8090/api/posts/findAll').then((response) => {
  postData.value = response.data.map((post) => {
    return {
      ...post,
      votes: post.upvotes,
    };
  });
});

</script>
<style>
#favourites:hover {
  cursor: pointer;
  background-image: url("../../assets/star-2768.png");
}
</style>