<!-- CreateEnquiry.vue -->

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2>Send Enquiry</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitEnquiry">
              <div class="mb-3">
                <label for="subject" class="form-label">Subject:</label>
                <input type="text" class="form-control" id="subject" v-model="subject" required>
                
              </div>
              
              <div class="mb-3">
                <label for="message" class="form-label">Message:</label>
                <textarea class="form-control" id="message" v-model="message" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Submit Enquiry</button>
            </form>
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
      subject: '',
      message: '',
      
    };
  },
  methods: {
   
    async submitEnquiry() {
    
      try {
        const response = await axios.post('http://localhost:8090/api/enquiries', {
          subject: this.subject,
          message: this.message,
        });

        if (response.status == 200) {
          // Optionally, you can perform additional actions based on the response
          // For example, show a success message or navigate to another page
          console.log('Enquiry created successfully');
          console.log(response.data);
        } else {
          console.error('Error creating enquiry:', response);
        }
      } catch (error) {
        console.error('Error creating enquiry:', error);
      }
    },
  },
};
</script>
