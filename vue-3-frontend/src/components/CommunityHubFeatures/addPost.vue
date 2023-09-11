<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Product Title</label>
                <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title">
            </div>
            <br>

            <div class="form-group">
                <label for="imageLink">Product Image Link</label>
                <input type="text" class="form-control" placeholder="Image Link" id="imageLink">
            </div>

            <a href="https://imgur.com/upload">Upload here</a>
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
</template>
  
<script>
export default {
    name: 'addPost',

}
</script>
  
<style></style>