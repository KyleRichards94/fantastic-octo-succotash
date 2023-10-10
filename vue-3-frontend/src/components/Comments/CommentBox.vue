<template>
    <div class="comment-box">
     
      <input v-model="comment" type="text" class="form-control" placeholder="Add a comment">
      <button @click="submitComment" class="btn btn-primary">Submit</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        comment: '', 
      };
    },
    methods: {
    async submitComment() {
      try {

        const postData = {
      postId: 1,
      userId: 3, //I will change this once user scomes online in the database 
      commentText: this.comment,
    };

    const response = await axios.post('http://localhost:8090/api/comment/create', postData);
        // Assuming your server responds with a success message
        console.log('Comment posted successfully', response.data);

        // Reset the comment input field
        this.comment = '';
      } catch (error) {
        // Handle errors (e.g., display an error message to the user)
        console.error('Error posting comment testtest', error);
      }
    },
  },
};
</script>
  
  <style scoped>
  .comment-box {
    margin-top: 10px;
  }
  </style>
  