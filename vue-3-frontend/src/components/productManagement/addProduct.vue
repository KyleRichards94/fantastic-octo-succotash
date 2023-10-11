<template>

<div>
    <div class="container">
      <div class="jumbotron text-white">
        <h3>Add Product</h3>
        <p>Enter product details below</p>
      </div>
    </div>

    <div class="container">
      <div class="message-container">
        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      </div>

      <form @submit.prevent="onUpload">
        <div class="form-group">
          <label for="productTitle">Product Name</label>
          <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title" v-model="productTitle" @change="onTitle">
        </div>
        <br>

        <div class="form-group">
          <label for="productDescription">Product Description</label>
          <textarea class="form-control" aria-label="With textarea" id="productDescription" v-model="productDescription" @change="onDescription"></textarea>
        </div>
        <br>

        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" placeholder="Enter Product Price" v-model="price" @change="onPrice">
        </div>
        <br>

        <div class="form-group">
          <label for="imageFile">Product Image</label>
          <input type="file" class="form-control" id="imageFile" @change="onImageSelected">
        </div>
        <br>

        <button type="submit" class="btn btn-dark">Create</button>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'addProduct',

  data() {
      return {
          objFile: null,
          imageFile: null,
          productDescription: "",
          productTitle: "",
          successMessage: false,
          successRedirect: "/addProduct",
          price: 0
      }
  },

  methods: {
      
      onImageSelected(event) {
          console.log(event);
          this.imageFile = event.target.files[0];
      },
      onTitle(event){
          this.productTitle = event.target.value;
          console.log(this.productTitle);
      },
      onDescription(event){
          this.productDescription = event.target.value;
          console.log(this.productDescription);
      },
      onPrice(event){
          this.price = event.target.value;
          console.log("Price entered is: " + this.price);
      },
      
  onUpload() {
      const isValid = this.validateForm(); // Add a function to validate the form
      if (!isValid) {
          return; // Stop form submission if validation fails
      }
      
      const formData = new FormData();
      formData.append('userId', 3); // stick to 3 for now untill the persistant userid data is created
      formData.append('productName', this.productTitle);
      formData.append('description', this.productDescription);
      formData.append('price', this.price);
      formData.append('imageFile', this.imageFile);

              axios.post('http://localhost:8090/api/products/addProduct', formData)
                  .then(response => {
                      // Handle success, e.g., show a success message to the user
                      console.log("success?")
                      console.log(response.data);
                      this.successMessage = "Succotash-tic! Product uploaded";

                      // Navigate to the specified route after a short delay
                      setTimeout(() => {
                          this.$router.push(this.successRedirect);
                      }, 2000); // Adjust the delay as needed
                  })
                  .catch(error => {
                      console.log("failure");
                      // Handle errors, e.g., show an error message to the user
                      console.error(error);
                  });
         
  }, 
  validateForm() {
      // Perform form validation here
      let isValid = true;

      // Example validation: Check if productTitle is empty
      if (this.productTitle.trim() === "") {
          isValid = false;
          // Add the is-invalid class to display the validation error
          document.getElementById('productTitle').classList.add('is-invalid');
      } else {
          // Remove the is-invalid class if the field is valid
          document.getElementById('productTitle').classList.remove('is-invalid');
      }

      if (this.productDescription.trim() === "") {
          isValid = false;
          document.getElementById('productDescription').classList.add('is-invalid');
      } else {
          document.getElementById('productDescription').classList.remove('is-invalid');
      }

    

      if (this.imageFile === null) {
          isValid = false;
          document.getElementById('imageFile').classList.add('is-invalid');
      } else {
          const imgFileName = this.imageFile.name.toLowerCase();
          if (imgFileName.endsWith('.png') || imgFileName.endsWith('.jpg') || imgFileName.endsWith('.gif') ) {
              document.getElementById('imageFile').classList.remove('is-invalid');
          } else {
              isValid = false;
              document.getElementById('imageFile').classList.add('is-invalid');
          }
      }

      // Add more validation for other form fields similarly

      return isValid;
  }
}

}
</script>

<style></style>