<template>
  <div class="container">
    <div class="jumbotron text-white">
      <h3 class="text-white">Create an account!</h3>
      <p>Please enter details</p>
    </div>
  </div>

  <div>
    <!-- <div class="message-container">
      <div v-if="userAdded" class="alert alert-success">{{ userAddedMessage }}</div>
    </div> -->
    <br>
    <!-- <form @submit="login"> -->
      <div class="form-group">
        <label for="userName">Username</label>
        <input type="text" class="form-control" id="userName" placeholder="Enter Username"
          v-model="userData.userName" required>
      </div>
      <br>

      <br>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password" placeholder="Enter Password"
          v-model="userData.password" required>
      </div>
      <br>
      <button type="submit" class="btn btn-dark" @click="login">Login</button>
    <!-- </form> -->
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests
import { useStore } from 'vuex';

const store = useStore();

export default {
  name: 'logIn',
  data() {
    return {
      userData: {
        userName: "",
        password: "",
      },
      loggedIn: false, // Flag to track if the product is added
      loggedInMessage: '', // Message to display when the product is added
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn'];
    },
    userId() {
      return this.$store.getters['user/userId'];
    },
    isStaff() {
      return this.$store.getters['user/isStaff'];
    },
  },
  methods: {
    login() {
      // Send a POST request to your API endpoint with the userData
      axios.post('http://localhost:8090/api/users/login', this.userData)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          // this.userAdded = true; // Set the flag to true
          // this.userAddedMessage = 'Logged in as' + this.userData.userName; // Set the success message
          console.log('User logged in', response.data);
          this.userData.userName = '';
          this.userData.password = '';
          store.commit('setUserId', response.data);
          store.commit('setIsLoggedIn', true);
          const currentUserId = this.userId;
          console.log('Current User ID:', currentUserId);
          const currentisLogged = this.isLoggedIn;
          console.log('Is user logged in:', currentisLogged);
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('Error adding user:', error);
        });
    },
  },
}

</script>

<style>
form {
  width: 500px;
  margin: 0 auto;
  /* Center the form horizontally */
  padding: 20px;
  /* Add some padding for better appearance */
  border: 1px solid #ccc;
  /* Optional: Add a border for visual separation */
  background-color: white;
  /* Optional: Add background color */
}

input {
  width: 100%;
}

span {
  display: block;
  overflow: hidden;
  padding-right: 10px;
}

button {
  float: middle;
}</style>