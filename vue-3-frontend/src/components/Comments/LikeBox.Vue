<template>
  <div class="likeBox">
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
