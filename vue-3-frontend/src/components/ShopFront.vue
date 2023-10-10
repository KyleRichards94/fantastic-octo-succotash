<template>
    <div class ="container" style = "padding-top: 2%;">
        
    <div class="jumbotron" style = "border-radius: 6px; padding: 2%;background-color: whitesmoke;background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
        <h1 class="display-3" style = "text-shadow:1px 2px white;font-weight:bold;;text-align: center;">Welcome, to the shop</h1>
        <hr class="my-4">
        <p class="lead" style = "text-align:center;text-shadow:1px 1px white ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Find your favourite 3D printers!</p>
    </div>

    <form>
      <div class="container" style="padding-top: 2%;">
        <div class="input-group mb-3">
          <input id='searchBar' type="text" class="form-control" placeholder="Search the Shop"
            aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="searchQuery">
          <span class="input-group-text" id="basic-addon2">Search</span>
        </div>
      </div>
      </form>

    <div class="container" style="padding-top: 2%">
        <div v-for="product in products" :key="product.productId" class="col-md-12">
            <div class="card" style="margin-bottom: 20px;">
            <div class="row">
                <!-- Image Column -->
                <div class="col-md-4" style = "align-items: center;">
                <!-- PLACEHOLDER IMAGE -->
                    <img class="card-img-sm" style="width: 100%" src="https://th.bing.com/th/id/OIP.SsGFYFL4_Xn4BXwx8H3mBwHaE8?pid=ImgDet&rs=1" alt="Card image cap">
                <!--<img :src="'http://localhost:8090' + product.imageLocation" alt="Card image cap">-->
                </div>
                <!-- Text Column -->
                <div class="col-md-5">
                    <br>
                    <h5 class="card-title">{{ product.productName }}</h5>
                    <hr style="margin: 0; border-top: 3px solid #807b7b;">
                    <p class="card-text">{{ product.description }}</p>
                    <hr style="margin: 0; border-top: 3px solid #807b7b;">
                    <br>
                </div>
                <div class = "col-md-3">
                    <br>
                    <div class="p-3 border bg-light" style="width: 50%;">
                        <p class="card-text">$ {{ product.price }}</p>
                    </div>
                    <br>
                    <a href="#" class="btn btn-primary" > Add to cart</a>
                </div>
                <div class = "col-md-3">
                    <span></span>
                </div>
            </div>
            </div>
        </div>
    </div>
        
    </div>
        <div class="row justify-content-md-center" style = "padding-top: 2%;">
            <div class="card" style = "width: 40%;background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center;">Want to see some cool designs you could be printing on your new printer!?</h5>
                <p class="card-text" style="text-align: center;"> Head over to our Community Hub and check them out!</p>
                <a href="#" class="btn btn-primary" >Community Hub</a>
            </div>
            </div>
        </div>
</template>

<script>

    import axios from 'axios';
    import {ref, onMounted} from 'vue';

    export default {
        name: 'ShopFront',
        data() {

        },
        setup() {
            //Grab all products from the page.
            const products = ref ([]);
            axios.get('http://localhost:8090/api/products/findAll').then((response) => {
                products.value = response.data;
            });

            onMounted(() => {
                axios.get('http://localhost:8090/api/products/findAll')
                    .then((response) => {
                    products.value = response.data;
                    })
                    .catch((error) => {
                    console.error('Error fetching products:', error);
                    });
                });

        return { products };
        }
    };


    
</script>