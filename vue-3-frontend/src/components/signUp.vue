<template>
  <div class="container">
    <div class="jumbotron text-white">
      <h3 class="text-white">Create an account!</h3>
      <p>Please enter details</p>
    </div>
  </div>

  <div>
    <div class="message-container">
      <div v-if="userAdded" class="alert alert-success">{{ userAddedMessage }}</div>
    </div>
    <br>
    <form @submit.prevent="signUp">
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

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="text" class="form-control" id="email" placeholder="Enter Email"
          v-model="userData.email" required>
      </div>
      <br>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="Enter address"
          v-model="userData.address" required>
      </div>
      <br>

      <button type="submit" class="btn btn-dark">Create</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  name: 'signUp',
  data() {
    return {
      userData: {
        userName: "",
        password: "",
        email: "",
        address: "",
      },
      userAdded: false, // Flag to track if the product is added
      userAddedMessage: '', // Message to display when the product is added
    };
  },
  methods: {
    signUp() {
      // Send a POST request to your API endpoint with the userData
      //MAYBE ADD HERE 
        //const uName = this.userData.userName.trim();
        //const password = this.userData.password.trim();
        //etc and then pass these through to avoid having to muck around with incorrect spaces in names and stuff like that, or find another spot to do this somewhere else in the code
      axios.post('http://localhost:8090/api/users/add', this.userData)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          this.userAdded = true; // Set the flag to true
          this.userAddedMessage = 'User added successfully'; // Set the success message
          console.log('User added successfully:', response.data);
          this.userData.userName = '';
          this.userData.password = '';
          this.userData.email = '';
          this.userData.address = '';
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('Error adding user:', error);
        });

        // --------------- this is trying to do sign up and login in one go but didnt work -----------------------------------
                      // axios.post('http://localhost:8090/api/users/login', this.userData)
                      // .then(response => {
                      //   // Handle success
                      //   //console.log('User logged in', response.data);
                      //   //this.userData.userName = '';
                      //   //this.userData.password = '';
                      //   console.log(response.data.userID);
                      //   this.$store.commit('user/setUserId', response.data.userID); // Use the correct mutation path
                      //   this.$store.commit('user/setIsLoggedIn', true); // Use the correct mutation path
                      //   console.log('User ID:', this.$store.getters['user/userId']);
                      //   console.log('Is Logged In:', this.$store.getters['user/isLoggedIn']);
                      //   // Rest of your code
                      //   console.log("no error");
                      //   window.location.reload();
                      // })
                      // .catch(error => {
                      //   // Handle error
                      //   console.error('Error adding user:', error);
                      // });
          // --------------- this is trying to do sign up and login in one go but didnt work -----------------------------------
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