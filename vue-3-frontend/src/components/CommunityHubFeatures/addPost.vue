<template>
    <div>
        <div class = "container" style = "padding-top: 2%;">
        <div class="jumbotron" style = "border-radius: 6px; padding-top: 2%; padding: 2%;background-image: url('https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <h1 style = "text-align: center;"> Create a new post </h1>
        </div>
    </div>

        <div class = "container" style=" padding-top: 2%;">

        <div class = "row">

            <div class = "col">
                <div class="card" style="width: 25rem;">
                <img class="card-img-top" style = "background-repeat: no-repeat;background-size: 100% auto;background-position: center center;" src = 'https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1' alt="Card image cap">
                <div class="card-body">
                    <h1>Your Object Title</h1>
                    <p> Your Object Description </p>
                </div>  
                </div>
            </div>

            <div class = "col">            
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Object Title</label>
                    <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title">
                </div>
                <br>

                <br>
                <div class="form-group">
                    <label for="productDescription">Product Description</label>
                    <textarea class="form-control" aria-label="With textarea" id="productDescription"></textarea>
                </div>
                <br>
                

                <div class="form-group">
                    <label for="imageLink">Object File (.Obj supported)</label>
                    <input type="file" class="form-control" placeholder="Image Link" id="imageLink">
                </div>

                <div class="form-group">
                    <label for="imageLink">Object display image</label>
                    <input type="file" class="form-control" placeholder="Upload a .jpg .png or .gif of your printable" id="imageLink">
                </div>

                <br>

                <button type="submit" class="btn btn-dark">Create</button>
            </form>
        </div>

        </div>
    </div>
    </div>  
</template>
  
<script>
export default {
    name: 'addPost',

}
</script>
  
<style></style>