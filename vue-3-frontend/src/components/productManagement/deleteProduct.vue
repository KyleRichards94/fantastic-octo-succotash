<template>
    <div class="container">
  <div class="jumbotron text-white">
    <h3>Delete Product</h3>      
    <p>Enter Product ID</p>
  </div>  
</div>

<div>
    <form @submit.prevent="deleteProductByName">
  <div class="form-group">
    <label for="productID">Product ID:</label>
    <input type="number" class="form-control" id="productID"  placeholder="Enter product ID" v-model="ProductID">
  </div>
  <br>
  <button type="submit" class="btn btn-danger">Delete</button>
</form>
</div>

<div>
    
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'deleteProduct',
  data() {
    return {
      ProductID: '', // Store the entered product name
    };
  },
  methods: {
    deleteProductByName() {
      // Send a DELETE request to your API endpoint with the product name
      console.log("product id is " + this.ProductID)
      axios.delete(`http://localhost:8090/api/products/deleteProductByName/${this.ProductID}`)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          console.log('Product deleted successfully:', response.data);
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('We fucked up son:', error);
        });
    },
  },
};
</script>

<style>
  form {
    width: 500px;
    margin: 0 auto; /* Center the form horizontally */
    padding: 20px; /* Add some padding for better appearance */
    border: 1px solid #ccc; /* Optional: Add a border for visual separation */
    background-color: white; /* Optional: Add background color */
  }
input {
    width: 100%;
}
span {
    display: block;
    overflow: hidden;
    padding-right:10px;
}
button {
    float: middle;
}
</style>