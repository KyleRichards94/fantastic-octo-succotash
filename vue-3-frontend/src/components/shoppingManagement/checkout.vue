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
                <input v-model="address" type="text">  
                <label> City </label>
                <input v-model="City" type="text"> 
                <label> state </label>
                <input v-model="state" type="text"> 
                <label> Post Code</label>
                <input v-model="postCode" type="text"> 
                <label> Country </label>
                <input v-model="country" type="text">  
            </div>

            <div class = "card">

                <div v-if="cardInfo != null">
                    <label for="cardSelect">Select a Card:</label>
                        <select v-model="selectedCard" id="cardSelect">
                            <option :value="null" >add a New Card</option>
                            <option v-for="card in cardInfo" :value="card" :key="card.creditCardId">{{ card.cardNumber }}</option>
                        </select>
                    <p v-if="selectedCard">You selected card: {{ selectedCard.cardNumber }}</p>
                    <p v-if="selectedCard">Card Holder Name: {{ selectedCard.cardHolderName }}</p>
                    <p v-if="selectedCard">Expiry Date: {{ selectedCard.expiryDate }}</p>
                    <p v-if="selectedCard">CVC: {{ selectedCard.CVC }}</p>
                    <p v-if="selectedCard">Billing Address: {{ selectedCard.billingAddress }}</p>
                </div>

                <div class = "card">
                        <div class = "container" v-if="selectedCard === null">
                            <p> Your Purchasing Info</p>
                            <label> Card Number </label>
                            
                            <p type="text" v-if="selectedCard != null"> {{ selectedCard.cardNumber }}</p>
                            <input v-model="cardNumber" type="text"  v-else-if="selectedCard == null"> 
                            <label> Card Holder Name</label>
                            <input v-model="cardHolderName" type="text"> 
                            <label> Expiry Date </label>
                            <input v-model="expDate" type="Date"> 
                            <label>CVC</label>
                            <input v-model="CVC" type="text" length = "3">  
                        <!-- i need to write API methods for Cardinfo get store -->
                        <button v-if="getCardInfos() == null" @click="addCard()">Add Card</button>
                        <button v-if="(getCardInfos() != null) && (selectedCard == null)" @click="addCard()">Add new Card</button>
                     </div>
                    </div>
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
import axios from 'axios';
//import { ref } from 'vue';


export default {
 
    name: 'checkOut',
    data() {
        return {
            cardInfo: [],
            shippinginfo:[],
            selectedCard: null,
            selectedShippingAddress: null,
            address: '',
            City: '',
            state: '',
            postCode: '',
            country: '',
            cardNumber: '',
            cardHolderName: '',
            expDate: '',
            CVC: '',
        }
    },
        
    computed: {
        cartItems(){
            return this.$store.getters['cart/cartItems'];
        },
        totalCartPrice() {
            return this.cartItems.reduce((total, product) => total + product.price, 0);
        }
        
    },

        async mounted() {
                this.cardInfo = await this.getCardInfos();
                this.shippinginfo = await this.getShippingInfos();
            },



        methods: {
            selectCard(card){
                this.selectCard = card;
                console.log(card.cardHolderName);
            },
            async getCardInfos() {
                const key = this.$store.getters['hashedKeys/CardHash'];
                try {
                    const response = await axios.get(`http://localhost:8090/api/creditCardInfo/${key}/${this.$store.getters['user/user'].userID}`);
                    const cards = response.data;
                    console.log(cards)
                    return cards;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
            async getShippingInfos(){
                const key = this.$store.getters['hashedKeys/shippingInfoHashedKey'];
                try {
                    const response = await axios.get(`http://localhost:8090/api/shippingInfo/${key}/${this.$store.getters['user/user'].userID}`);
                    const addresses = response.data;
                    console.log(addresses)
                    return addresses;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
            addCard(){
                const key = this.$store.getters['hashedKeys/CardHash'];
                const newCard = {
                    userId: this.$store.getters['user/user'].userID,
                    cardNumber: this.cardNumber,
                    expiryDate: this.expDate,
                    cardHolderName: this.cardHolderName,
                    billingAddress: this.address + " " + this.postCode + " " + this.City + " " + this.country,
                    CVC: this.CVC,
                };
                axios.post(`http://localhost:8090/api/creditCardInfo/${key}/create`, newCard).then((response) => {
                    console.log(response.data);
                    console.log("card added");

                    //bootstrap message show. 

                }).catch((error) => {
                    console.error(error);
                });

            },
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

           
            //Create new Card entry to the database, 
            //refresh, 
            //Save the order to the database as a new order with cart items. 
        },

}
</script>