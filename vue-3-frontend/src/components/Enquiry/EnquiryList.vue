
<!-- EnquiryList.vue -->
<template>
  <div class="w-50 m-auto p-3">
    <h1 class="">Enquiry lists</h1>
    <div class="list-group m-4">
        <div class="list-group-item list-group-item-action " aria-current="true" v-for="enquiry in enquiries" :key="enquiry.enquiryID" @click="openReplyPage(enquiry.enquiryID)">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ enquiry.subject }}</h5>
            
            <small>{{ enquiry.unreplied ? 'Unreplied' : 'Replied' }}</small>
            </div>
            <p class="mb-1">{{ enquiry.message }}</p>
            
        </div>
        </div>
  </div>
</template>


<script>

import axios from 'axios';

export default {
  data() {
    return {
      enquiries: [],
    };
  },
  mounted() {
    this.fetchEnquiries();
  },
  methods: {
    async fetchEnquiries() {
      try {
        const response = await axios.get('http://localhost:8090/api/enquiries');
        // const data = await response.json();
        // this.enquiries = data;
        this.enquiries = response.data;
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    },
    openReplyPage(enquiryId) {
      // Your navigation logic to reply page
       this.$router.push(`/reply/${enquiryId}`);
    },
  },
};
</script>
