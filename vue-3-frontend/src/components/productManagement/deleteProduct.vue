<template>
    <div class="container">
  <div class="jumbotron">
    <h3>Delete Product</h3>      
    <p>Enter Product ID</p>
  </div>  
</div>

<div>
    <form>
  <div class="form-group">
    <label for="productID">Product ID</label>
    <input type="text" class="form-control" id="productID"  placeholder="Enter Product ID">
  </div>
  <br>
  <button type="submit" class="btn btn-danger">Delete</button>
</form>
</div>

<div>
    
</div>

</template>

<script>
export default {
    name: 'deleteProduct'
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