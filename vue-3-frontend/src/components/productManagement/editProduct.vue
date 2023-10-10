<template>
  <div class="container">
    <div class="jumbotron text-white">
      <h3>Edit Product</h3>
      <p>Enter the ID of the Product You'd like to edit</p>
    </div>
  </div>

  <div>
    <div class="message-container">
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </div>
    <form @submit.prevent="updateProduct">
      <div class="form-group">
        <label for="productId">Product ID</label>
        <input type="text" class="form-control" id="productId" placeholder="Enter Product ID" v-model="productId">
      </div>
      <br>
      <div class="form-group">
        <label for="ProductName">Product Name</label>
        <input type="text" class="form-control" id="ProductName" placeholder="Enter product Name" v-model="productName">
      </div>
      <br>

      <div class="form-group">
        <label for="productImage">Upload Image</label>
        <input type="file" class="form-control" placeholder="productImage" id="productImage">
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="description">Product Description</label>
        <textarea class="form-control" aria-label="With textarea" id="description" v-model="description">
      </textarea>
      </div>
      <br>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Enter Product Name" v-model="price">
      </div>
      <br>
      <button type="submit" class="btn btn-dark">Submit Changes</button>
    </form>
  </div>
<br>
  

</template>

<script>
import axios from 'axios';

export default {
  name: 'editProduct',
  data() {
    return {
      productId: '',
      productName: '',
      description: '',
      price: '',
      successMessage: '', // Initialize successMessage
      errorMessage: '',   // Initialize errorMessage
      // Add data properties for Description, Price, and other properties
    };
  },
  methods: {
    updateProduct() {
      // Send a PUT request to update the product
      axios
        .put(`http://localhost:8090/api/products/updateProduct/${this.productId}`, {
          productName: this.productName,
          description: this.description,
          price: this.price
          // Include other fields to update
        })
        .then((response) => {
        if (response.data.message === 'Product updated successfully') {
          // Handle success when the message indicates success
          this.successMessage = 'Product updated successfully';
          this.errorMessage = ''; // Clear any previous error message
          // Clear the form fields
          this.productId = '';
          this.productName = '';
          this.description = '';
          this.price = '';
          // You can also redirect here if needed
          console.log('Product updated successfully:', response.data);
        } else {
          // Handle the case where the response does not indicate success
          this.successMessage = '';
          this.errorMessage = 'Product not found'; // Set an error message
          console.error('Product not found:', response.data);
        }
      })
        .catch((error) => {
          // Handle error
          this.errorMessage = 'Error updating product: ' + error.message;
          this.successMessage = ''; // Clear any previous success message
          // Handle error - you can display an error message here
          console.error('Error updating product:', error);
        });
    },
  },
};
</script>

<style>
.message-container {
  width: 500px; /* Adjust the width as needed */
  margin: 0 auto; /* Center the messages horizontally */
}
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
}
</style>