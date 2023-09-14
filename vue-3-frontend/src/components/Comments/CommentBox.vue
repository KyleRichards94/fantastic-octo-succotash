<template>
    <div class="comment-box">
     
      <input v-model="comment" type="text" class="form-control" placeholder="Add a comment">
      <button @click="submitComment" class="btn btn-primary">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: '', 
      };
    },
    methods: {
      submitComment() {

        this.$emit('submitComment', this.comment);
     
        this.comment = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-box {
    margin-top: 10px;
  }
  </style>
  