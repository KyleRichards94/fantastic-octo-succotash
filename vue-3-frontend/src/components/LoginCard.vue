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
  methods: {
    login() { //maybe try changing this and/or method in the controller to make it not spit an error to console for incorrect login data
      axios.post('http://localhost:8090/api/users/login', this.userData)
        .then(response => {
          // Handle success
          //console.log('User logged in', response.data);
          //this.userData.userName = '';
          //this.userData.password = '';
          console.log(response.data.userID);
          this.$store.commit('user/setUserId', response.data.userID); // Use the correct mutation path
          this.$store.commit('user/setIsLoggedIn', true); // Use the correct mutation path
          console.log('User ID:', this.$store.getters['user/userId']);
          console.log('Is Logged In:', this.$store.getters['user/isLoggedIn']);
          // Rest of your code
          console.log("no error");
          window.location.reload();          
          window.onload = () => {
            this.$router.push('/'); // navigate to home page after reload so it looks cleaner THIS DOESNT WORK YET
          }
        })
        .catch(error => {
          // Handle error
          console.error('Error logging in:', error);
        });
    },
  },
};

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