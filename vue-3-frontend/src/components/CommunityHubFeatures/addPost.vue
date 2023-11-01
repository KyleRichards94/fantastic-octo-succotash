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
        
        <div class= "container">
            <br>
        <div class="alert alert-success" v-if="successMessage">
                    Post created successfully! Redirecting you back to the community hub ...
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
                    <div class = "container" v-if="this.$store.getters['user/user'].userID != null" style ="background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                        <div class="form-group">
                            <label for="productTitle">Object Title</label>
                            <input type="text" class="form-control" id="productTitle" placeholder="Enter Product Title" @change="onTitle"
                                required>
                            <div class="invalid-feedback">Please enter a valid title.</div>
                        </div>
                        <br>

                        <br>
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" aria-label="With textarea" id="productDescription" @change="onDescription"></textarea>
                            <div class="invalid-feedback">Please enter an accurate description of your printable item.</div>
                        </div>
                        <br>


                        <div class="form-group">
                            <label for="imageLink">Object File (.Obj supported)</label>
                            <input type="file" class="form-control" placeholder="Image Link" id="objFile" @change="onObjSelected">
                            <div class="invalid-feedback"> Please select a file with a .Obj extention.</div>
                        </div>

                        <div class="form-group">
                            <label for="imageLink">Object display image</label>
                            <input type="file" class="form-control"
                                placeholder="Upload a .jpg .png or .gif of your printable" id="imageFile" @change="onImageSelected">
                                <div class="invalid-feedback"> Please select an image file, can be PNG JPG or GIF.</div>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault" v-model="isAgreed">
                            <label class="form-check-label" for="flexCheckDefault">
                                Do you agree to the end User License Agreements?
                            </label>
                        </div>

                        <br>

                        <button @click="onUpload" type="submit" class="btn btn-dark">Create</button>
                        <br>
                   
                    </div>

                    <div class = "container" v-if="this.$store.getters['user/userId'] == null" >
                            <div class="card"
                                style="width: 40%;background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                                <div class="card-body">
                                    <h5 class="card-title" style="text-align: center;">Want to Share your awesome designs? </h5>
                                <p class="card-text" style="text-align: center;"> Sign up with your succotash account!</p>
                                <RouterLink class="btn btn-primary" to="/signUp">Lets get started! </RouterLink>
                            </div>
                        
                    </div>
                    </div>
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
            productTitle: "",
            successMessage: false,
            successRedirect: "/CommunityHub"
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
        const isValid = this.validateForm(); // Add a function to validate the form
        if (!isValid) {
            return; // Stop form submission if validation fails
        }
        if (this.isAgreed) {
        const formData = new FormData();
        formData.append('userId', "3"); // stick to 3 for now untill the persistant userid data is created
        formData.append('title', this.productTitle);
        formData.append('description', this.productDescription);
        formData.append('objFile', this.objFile);
        formData.append('imageFile', this.imageFile);

                axios.post('http://localhost:8090/api/posts/create', formData)
                    .then(response => {
                        // Handle success, e.g., show a success message to the user
                        console.log("success?")
                        console.log(response.data);
                        this.successMessage = true;

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
            } else {
                alert("you must agree to the EULA to upload printable objects.");
            }
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

        if (this.objFile === null) {
            isValid = false;
            document.getElementById('objFile').classList.add('is-invalid');
        } else {
            // Check if the selected file has a .obj extension
            const objFileName = this.objFile.name.toLowerCase();
            if (!objFileName.endsWith('.obj')) {
                isValid = false;
                document.getElementById('objFile').classList.add('is-invalid');
            } else {
                document.getElementById('objFile').classList.remove('is-invalid');
            }
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

        return isValid;
    }
}

}
</script>
  
<style></style>