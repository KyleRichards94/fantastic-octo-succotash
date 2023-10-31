<template>

    <br>
    <div class="container">
        <div class="jumbotron"
            style="border-radius: 6px; padding: 2%;background-color: whitesmoke;background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
            <h1 class="display-3" style="text-shadow:1px 2px white;font-weight:bold;;text-align: center;"> Cart and Checkout
            </h1>
            <hr class="my-4">
            <p class="lead"
                style="text-align:center;text-shadow:1px 1px white ;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
                Edit your cart and checkout</p>
        </div>
    </div>

    <br>

    <div class="container">
        <div class="card">
            <div class = "row">
                        <div class="col">
                           <p>Image </p>
                            
                        </div>
                        <div class = "col">
                            <div>
                                <p>Product Name</p>
                            </div>
                        </div>
                        <div class="col">
                       
                            <div>
                               <P>Price</p>
                            </div>
                        </div>
                   <div class="col">
                       
                       <div>
                          <P>Remove</p>
                       </div>
                   </div>
                    </div>
                </div>
            <div class="card">
                
            <li class="list-group-item" v-for="(product, index) in cartItems" :key="product.id">
                <div class="row">
                    <div class="col">
                        <img class="card-img-top" :src="'http://localhost:8090' + product.imageLocation" alt="Card image cap">
                        <!--<img class="card-img-sm" style="width:64px"
                            src="https://th.bing.com/th/id/OIP.SsGFYFL4_Xn4BXwx8H3mBwHaE8?pid=ImgDet&rs=1"
                            alt="Card image cap">-->
                            
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
                <hr>
            </li>
            <!-- Price -->
            <li class="list-group-item">
                <div class="row">
                    <div class="col" style="text-align: center;">Total:</div>
                    <br>
                    <h5 style="text-align: center;">$ {{ totalCartPrice }}</h5>
                    <br>
                    <div class="col" style="text-align: center;">
                        <RouterLink to="/checkOut" class="btn btn-primary">Checkout</RouterLink>
                    </div>
                    <br>
                </div>
            </li>
        </div>
    </div>
</template>
<script>

export default {
    name: 'shoppingCart',
    data() {
    },
    setup() {
        let total = null;

        return total;
    },
    computed: {
        cartItems() {
            return this.$store.getters['cart/cartItems']; // Replace 'cart' with the actual getter name in your store
        },
        totalCartPrice() {
            return this.cartItems.reduce((total, product) => total + product.price, 0);
        },
        
    },
    methods: {
        
        removeFromCart(index) {
            this.$store.dispatch('cart/deleteCartItem', this.cartItems[index]);
            window.location.reload();
        },
        confirmRemove(product) {
            product.confirmRemove = true;
        },
        cancelRemove(product) {
            product.confirmRemove = false;
        },
        calculateTotalPrice(product, quantity){

            return product.price * quantity;
        }


    },
}

</script>