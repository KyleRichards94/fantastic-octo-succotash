<template>
    <div>
        <div class="container" style="padding-top: 2%;">
            <div class="jumbotron"
                style="border-radius: 6px; padding-top: 2%; padding: 2%;background-image: url('https://chessprintingsolutions.com/wp-content/uploads/2021/06/3D-Printer-3-MK-Canva-Pro-1.png');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                <h1 style="text-align: center;"> Create a new post </h1>

                <router-link class="btn btn-primary btn-lg" style="padding-left: 45px;padding-right: 45px;"
                    to="/CommunityHub" role="button">return</router-link>
            </div>
        </div>

        <div class="container" style=" padding-top: 2%;">

            <div class="row">

                <div class="col">
                    <div class="container">
                        <div class="card" style="width: 25rem;">
                            <img class="card-img-top"
                                style="background-repeat: no-repeat;background-size: 100% auto;background-position: center center;"
                                src='https://th.bing.com/th/id/OIP.94Nm3qVbB3jFEu5F7G2DsAHaFj?pid=ImgDet&rs=1'
                                alt="Card image cap">
                            <div class="card-body">
                                <h1>Your Object Title</h1>
                                <p> Your Object Description </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Object Title</label>
                            <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title" @change="onTitle">
                        </div>
                        <br>

                        <br>
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" aria-label="With textarea" id="productDescription" @change="onDescription"></textarea>
                        </div>
                        <br>


                        <div class="form-group">
                            <label for="imageLink">Object File (.Obj supported)</label>
                            <input type="file" class="form-control" placeholder="Image Link" id="objFile" @change="onObjSelected">
                        </div>

                        <div class="form-group">
                            <label for="imageLink">Object display image</label>
                            <input type="file" class="form-control"
                                placeholder="Upload a .jpg .png or .gif of your printable" id="imageFile" @change="onImageSelected">
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Do you agree to the end User License Agreements?
                            </label>
                        </div>

                        <br>

                        <button @click="onUpload" type="submit" class="btn btn-dark">Create</button>
                   
                 </form>
            </div>

        </div>
    </div>
</div></template>
  
<script>
import axios from 'axios';
export default {
    name: 'addPost',

    data() {
        return {
            objFile: null,
            imageFile: null,
            productDescription: "",
            productTitle: ""
        }
    },

    methods: {
        onObjSelected(event) {
            console.log(event);
            this.objFile = event.target.files[0];
        },
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
        
    onUpload() {
        const formData = new FormData();
        formData.append('userId', 3); // stick to 3 for now untill the persistant userid data is created
        formData.append('title', this.productTitle);
        formData.append('description', this.productDescription);
        formData.append('objFile', this.objFile);
        formData.append('imageFile', this.imageFile);

        axios.post('http://localhost:8090/api/posts/create', formData)
            .then(response => {
                // Handle success, e.g., show a success message to the user
                console.log("success?")
                console.log(response.data);
            })
            .catch(error => {
                console.log("failure");
                // Handle errors, e.g., show an error message to the user
                console.error(error);
            });
    }
}

}
</script>
  
<style></style>