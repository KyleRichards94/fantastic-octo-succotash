<template>
  <div class="container">
    <div class="jumbotron text-white">
      <h3>Edit Product</h3>
      <p>Enter the ID of the Product You'd like to edit</p>
    </div>
  </div>

  <div>
    <form @submit.prevent="updateProduct">
      <div class="form-group">
        <label for="productID">Product ID</label>
        <input type="text" class="form-control" id="productID" placeholder="Enter Product ID" v-model="productID">
      </div>
      <br>
      <div class="form-group">
        <label for="ProductName">Product Name</label>
        <input type="text" class="form-control" id="ProductName"
          placeholder="Enter product Name"
          v-model="productName">
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
        <textarea class="form-control" aria-label="With textarea" id="description"
        v-model="Description">
      </textarea>
      </div>
      <br>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Enter Product Name" v-model="Price"
          required>
      </div>
      <br>
      <button type="submit" class="btn btn-dark">Submit Changes</button>
    </form>
  </div>

  <div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'editProduct',
  data() {
    return {
      productID: '',
      productName: '',
      Description: '',
      Price:'',
      // Add data properties for Description, Price, and other properties
    };
  },
  methods: {
    updateProduct() {
      // Send a PUT request to update the product
      axios
        .put(`http://localhost:8090/api/products/updateProduct/${this.productID}`, {
          ProductName: this.productName,
          Description: this.Description,
          Price: this.Price
          // Include other fields to update
        })
        .then((response) => {
          // Handle success - you can show a success message or redirect here
          console.log('Product updated successfully:', response.data);
        })
        .catch((error) => {
          // Handle error - you can display an error message here
          console.error('Error updating product:', error);
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