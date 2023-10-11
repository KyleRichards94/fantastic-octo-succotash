<template>
  <div class="container">
    <div class="jumbotron text-white">
      <h3 class="text-white">Add a new product</h3>
      <p>Please enter details</p>
    </div>
  </div>

  <div>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input type="text" class="form-control" id="productName" placeholder="Enter Product Name"
          v-model="productData.ProductName" required>
      </div>
      <br>

      <div class="form-group">
        <label for="imageLink">Upload Image</label>
        <input type="file" class="form-control" placeholder="Image Link" id="imageLink">
      </div>


      <br>
      <div class="form-group">
        <label for="description">Product Description</label>
        <textarea class="form-control" aria-label="With textarea" id="description" v-model="productData.Description"
          required></textarea>
      </div>
      <br>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Enter Product Name" v-model="productData.Price"
          required>
      </div>

      <br>
      <button type="submit" class="btn btn-dark">Create</button>
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