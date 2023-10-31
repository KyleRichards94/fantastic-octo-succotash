<template>
    <!-- Card Info -->
    <div v-if="this.$store.getters['user/user'] != null" class = "row">
        <div class ="col">
            <div class = "card"> 
                <P>Your Shipping Info</P>
                <!-- i need to write API methods for Shippinginfo get store -->
                <!-- v-if the user has some card info already stored. -->
                <!-- v-else -->
                <label> Address</label>
                <input type="text"> 
                <label> City </label>
                <input type="text"> 
                <label> state </label>
                <input type="text"> 
                <label> Post Code</label>
                <input type="text"> 
                <label> Country </label>
                <input type="text">  
            </div>

            <div class = "card">
                    <p> Your Purchasing Info</p>
                    <label> Card Number </label>
                    <input type="text"> 
                    <label> Expiry Date </label>
                    <input type="Date"> 
                    <label>CVC</label>
                    <input type="text" length = "3">  
                <!-- i need to write API methods for Cardinfo get store -->
            </div>
            <div class = "card">
                <button class="btn btn-primary"> Purchase </button>
            </div>
        </div>

        <!-- products -->
        <div class = "col">
            <div class = "card">
                <p> Your Cart </p>
                <div v-for="(product,index) in cartItems" :key="product.id" class = "container" style = "margin-top: 4px;">
                    <div class="row">
                        <div class="col">
                            <img class="card-img-top" :src="'http://localhost:8090' + product.imageLocation" alt="Card image cap">
                                
                        </div>
                        <div class = "col">
                            <div>
                                {{ product.productName }}
                            </div>
                        </div>
                        <div class="col">
                        
                            <div>
                                ${{ product.price }}
                            </div>
                        </div>
                    <div class="col">
                        
                            <div v-if="!product.confirmRemove">
                                <a href="#" @click="confirmRemove(product)" class="btn btn-danger">Remove</a>
                                    </div>
                                    <div v-else>
                                    <a href="#" @click="removeFromCart(index)" class="btn btn-primary">Confirm</a>
                                    <a href="#" @click="cancelRemove(product)" class="btn btn-secondary">Cancel</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Sign in Warning -->
    <div v-else>
            <div class = "container" style="margin-top: 15%;">
                <div class="card" style="background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                                    <div class="card-body">
                                        <h5 class="card-title" style="text-align: center;">Want to purchase our amazing products? </h5>
                                    <p class="card-text" style="text-align: center;"> Sign up with your succotash account to get started!</p>
                                    <div class = "conainer"> 
                                        <div class = "row">
                                            <div class = "col"></div>
                                            <div class = "col">
                                                <RouterLink style ="margin-right: 50%" class="btn btn-primary" to="/signUp"> SignUp! </RouterLink>
                                                <RouterLink class="btn btn-primary" to="/loginCard"> SignIn! </RouterLink>
                                            </div>
                                            <div class = "col"></div>
                                        </div>
                                    </div>
                                </div> 
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'checkOut',
  
    computed: {
        cartItems(){
            return this.$store.getters['cart/cartItems'];
        },
        totalCartPrice() {
            return this.cartItems.reduce((total, product) => total + product.price, 0);
        },

        methods: {
            //Create new Card entry to the database, 
            //refresh, 
            //Save the order to the database as a new order with cart items. 
        }
    }

}
</script>