<template>
    <div class="container">
  <div class="jumbotron">
    <h3>Add a new product</h3>      
    <p>Please enter details</p>
  </div>  
</div>



<div>
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" v-model="productData.ProductName" required>
      
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="productData.Description" required>
      
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="productData.Price" required>
      
      <button type="submit">Add Product</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
    name: 'addProduct',
    data() {
    return {
      productData: {
        ProductName: '',
        Description: '',
        Price: 0,
      },
    };
  },
  methods: {
    addProduct() {
      // Send a POST request to your API endpoint with the productData
      axios.post('http://localhost:8090/api/products/addProduct', this.productData)
        .then(response => {
          // Handle success - you can show a success message or redirect here
          console.log('Product added successfully:', response.data);
        })
        .catch(error => {
          // Handle error - you can display an error message here
          console.error('Error adding product:', error);
        });
    },
  },
}
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