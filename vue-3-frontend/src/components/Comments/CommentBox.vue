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
        const response = await axios.post('http://localhost:8080/api/comments/createComment', {
          comment: this.comment,
        });

        // Assuming your server responds with a success message
        console.log('Comment posted successfully', response.data);

        // Reset the comment input field
        this.comment = '';
      } catch (error) {
        // Handle errors (e.g., display an error message to the user)
        console.error('Error posting comment', error);
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
  