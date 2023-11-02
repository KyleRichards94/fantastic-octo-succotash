<template>
  <div class="w-50 m-auto p-3" v-if="$store.getters['user/user'] !== null">
    <h1 class="text-light m-4">Enquiry lists</h1>
    <div class="m-4 filter-btn">
      <button class="btn btn-primary" @click="showAllEnquiries">Show All Enquiries</button>
      <button class="btn btn-success" @click="showRepliedEnquiries">Show Replied Enquiries</button>
      <button class="btn btn-danger" @click="showUnrepliedEnquiries">Show Unreplied Enquiries</button>
    </div>
    <div class="list-group m-4">
      
      <div
        class="list-group-item list-group-item-action"
        aria-current="true"
        v-for="enquiry in filteredEnquiries"
        :key="enquiry.enquiryID"
        @click="openReplyPage(enquiry.enquiryID)"
      >
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
      displayedEnquiries: [], // Create a new data property
      filter: 'all', // Initialize with 'all'
    };
  },

  computed: {
    filteredEnquiries() {
      if (this.filter === 'all') {
        return this.enquiries;
      } else if (this.filter === 'replied') {
        return this.enquiries.filter((enquiry) => !enquiry.unreplied);
      } else {
        return this.enquiries.filter((enquiry) => enquiry.unreplied);
      }
    },
  },

  mounted() {
    this.fetchEnquiries();
  },

  methods: {
    async fetchEnquiries() {
      try {
        const response = await axios.get('http://localhost:8090/api/enquiries');
        this.enquiries = response.data;
        this.displayedEnquiries = this.enquiries; // Initialize displayedEnquiries with all enquiries
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    },

    openReplyPage(enquiryId) {
      this.$router.push(`/reply/${enquiryId}`);
    },

    showAllEnquiries() {
      this.filter = 'all'; // Show all enquiries
    },
    // Show only replied enquiries
    showRepliedEnquiries() {
      this.filter = 'replied'; 
    },
     // Show only unreplied enquiries
    showUnrepliedEnquiries() {
      this.filter = 'unreplied';
    },
  },
};
</script>
<style scoped>
  .filter-btn button{
    margin-right: 20px;
  }
</style>
