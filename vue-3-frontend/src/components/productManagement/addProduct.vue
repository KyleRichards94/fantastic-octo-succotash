<template>
    <div class="container">
  <div class="jumbotron">
    <h3>Add a new product</h3>      
    <p>Please enter details</p>
  </div>  
</div>

<div>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Product Title</label>
    <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title">
  </div>
  <br>

  <div class="form-group">
                            <label for="imageLink">Upload Image</label>
                            <input type="file" class="form-control" placeholder="Image Link" id="imageLink">
                        </div>

  
  <br>
  <br>
    <div class="form-group">
        <label for="productDescription">Product Description</label>
        <textarea class="form-control" aria-label="With textarea" id="productDescription"></textarea>
    </div>
  <br>
  <button type="submit" class="btn btn-dark">Create</button>
</form>
</div>

<div>
    
</div>

</template>

<script>
export default {
    name: 'addProduct'
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