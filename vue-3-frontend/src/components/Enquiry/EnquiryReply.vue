<!-- EnquiryReply.vue -->
<!-- <template>
//   <div>
//     <h2>Reply to Enquiry</h2>
//     <p>Enquiry ID: {{ enquiryId }}</p>
//     <p>Enquiry Title: {{ selectedEnquiry ? selectedEnquiry.subject : '' }}</p>
//     <p>Enquiry Message: {{ selectedEnquiry ? selectedEnquiry.message : '' }}</p>
//     <textarea v-model="replyText"></textarea>
//     <button @click="submitReply">Submit Reply</button>
//   </div>
// </template>-->

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">Reply to Enquiry</h2>
          </div>
          <div class="card-body">
            <p class="mb-2">Enquiry ID: {{ enquiryId }}</p>
            <p class="mb-2">Enquiry Title: {{ selectedEnquiry ? selectedEnquiry.subject : '' }}</p>
            <p class="mb-2">Enquiry Message: {{ selectedEnquiry ? selectedEnquiry.message : '' }}</p>
            <div class="form-group ">
              <label for="replyText">Your Reply:</label>
              <textarea class="form-control mt-3" id="replyText" v-model="replyText"></textarea>
            </div>
            <button class="btn btn-primary mt-4" @click="submitReply">Submit Reply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      enquiryId: null,
      replyText: '',
      selectedEnquiry: null
    };
  },
  mounted() {
    this.enquiryId = this.$route.params.enquiryId;
    this.showEnquiry(this.enquiryId);
  },
  methods: {
    async showEnquiry(id) {
        try {
            const response = await axios.get(`http://localhost:8090/api/enquiries/${id}`);
            this.selectedEnquiry = response.data;
        } catch (error) {
            console.error(`Error fetching enquiry details for ID ${id}:`, error);
            // Optionally, you can add more information or handle the error in another way
        }       
    },
    async submitReply() {
      try {
        const response = await axios.put(`http://localhost:8090/api/enquiries/${this.enquiryId}`, {
          reply: this.replyText,
        //   unreplied: false
        });

        if (response.status == 200) {
          // Optionally, you can perform additional actions based on the response
          // For example, show a success message
          console.log('Reply submitted successfully');
        } else {
          console.error('Error submitting reply:', response.data.message);
        }
      } catch (error) {
        console.error('Error submitting reply:', error);
      }
    },
  },
};
</script>
