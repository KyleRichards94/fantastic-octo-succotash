<template>
    <div style = "background-color: rgb(242,246,251); height : 100vh">
       <div class="w-75 m-auto bg-white border ">
            <div class="header h-50 p-3 " style="background-color: #F8F8F9">
                <h3>My Account details</h3>
            </div>
            <div class="message-container">
                    <div v-if="userUpdated" class="alert alert-success">{{ userUpdatedMessage }}</div>
            </div>
            <br>
            <form class="mt-4 p-3" @submit.prevent="updateUser"> <!-- for now this for will have the unecessary fields removed as they are not reflected in the database, these can be reimpemented for release 3  -->
                <!-- <div class="form-row row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="First Name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Last Name">
                    </div>
                </div> -->
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="username" 
                    v-model="userData.userName" required>
                    
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email"
                    v-model="userData.email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"
                    v-model="userData.password" required>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address <!-- (Street) --></label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Street #, Street name, Suburb, Post code, State, Country"
                    v-model="userData.address" required>
                </div>
                <!-- <div class="form-row row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                                <option>NSW</option>
                                <option>VIC</option>
                                <option>NT</option>
                                <option>SA</option>
                                <option>QLD</option>
                                <option>WA</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                    </div>
                </div> -->
                <button type="submit" class="btn btn-primary mt-4">Update</button>

            </form>
            <button class="btn btn-danger mt-4 " @click="deleteUser">Delete Account</button> <!-- make this spaced when you get the chance-->
       </div>
    </div>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default{
    name: 'MyAccount',
    data() {
    return {
      userData: {
        userId: this.$store.getters['user/userId'],
        userName: "",
        password: "",
        email: "",
        address: "",
        isStaff: ""
      },
      userUpdated: false, // Flag to track if the product is added
      userUpdatedMessage: '', // Message to display when the product is added
    };
  },
  methods:{
    updateUser(){
        axios.post('http://localhost:8090/api/users/update', this.userData)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          this.userUpdated = true; // Set the flag to true
          this.userUpdatedMessage = 'User updated successfully'; // Set the success message
          console.log('User added successfully:', response.data);
          this.userData.userName = '';
          this.userData.password = '';
          this.userData.email = '';
          this.userData.address = '';
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('Error updating user:', error);
        });
    },
    deleteUser(){
        axios.post('http://localhost:8090/api/users/delete', this.userData)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          this.userUpdated = true; // Set the flag to true
          this.userUpdatedMessage = 'User updated successfully'; // Set the success message
          console.log('User added successfully:', response.data);
          this.userData.userName = '';
          this.userData.password = '';
          this.userData.email = '';
          this.userData.address = '';
          this.$store.dispatch('user/logout');
          this.$router.push('/');
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('Error updating user:', error);
        });
    },
  }
    }
</script>

<style scoped>
    label{
        margin-top: 15px;
        margin-bottom: 10px;
    
    }
</style>
