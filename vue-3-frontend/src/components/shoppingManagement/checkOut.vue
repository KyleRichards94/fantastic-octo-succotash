<template>
    <!-- Card Info -->
    <div v-if="this.$store.getters['user/user'] != null && this.$store.getters['cart/cartItems'].length != 0 " class = "row">
        <div class ="col">
            <div v-if="shippinginfo.length != 0" class = "card">
                <label for="shippingSelect">Select you shipping address - the items will be delivered to this address</label>
                <select v-model="selectedShippingAddress" id="shippingSelect">
                    <option :value="null">add a new address</option>
                    <option v-for="address in shippinginfo" :value="address" :key="address.address">{{ address.address }}</option>
                </select>
                <p v-if="selectedShippingAddress">Full name: {{ selectedShippingAddress.fullName}}</p>
                <p v-if="selectedShippingAddress">Address: {{ selectedShippingAddress.address}}</p>
                <p v-if="selectedShippingAddress">City: {{ selectedShippingAddress.city}}</p>
                <p v-if="selectedShippingAddress">State: {{ selectedShippingAddress.state}}</p>
                <p v-if="selectedShippingAddress">Post code: {{ selectedShippingAddress.state}}</p>
                <p v-if="selectedShippingAddress">Country: {{ selectedShippingAddress.country}}</p>
                   
            </div>
            <div class = "card" v-if="selectedShippingAddress == null"> 
                <P>Your Shipping Info</P>

                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input v-model="fullName" type="text" class="form-control" :class="{ 'is-invalid': !isValidFullName, 'is-valid': isValidFullName }">
                    <div class="invalid-feedback" v-if="!isValidFullName">Please enter a valid full name.</div>
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <input v-model="address" type="text" class="form-control" :class="{ 'is-invalid': !isValidAddress, 'is-valid': isValidAddress }">
                    <div class="invalid-feedback" v-if="!isValidAddress">Please enter a valid address.</div>
                </div>

                <div class="form-group">
                    <label> City </label>
                    <input v-model="City" type="text" class="form-control" :class="{ 'is-invalid': !isValidCity, 'is-valid': isValidCity }"> 
                    <div class="invalid-feedback" v-if="!isValidCity">Please enter a valid City.</div>
                </div>

                <div class="form-group">
                    <label> state </label>
                    <input v-model="state" type="text" class="form-control" :class="{'is-invalid': !isValidState, 'is-valid': isValidState}"> 
                    <div class="invalid-feedback" v-if="!isValidCity">Please enter a valid State.</div>
                </div>
                <div class="form-group">
                    <label> Post Code</label>
                    <input v-model="postCode" type="text"  class="form-control" :class="{'is-invalid': !isValidPostCode, 'is-valid': isValidPostCode}"> 
                    <div class="invalid-feedback" v-if="!isValidCity">Please enter a valid Post Code.</div>
                </div>

                <div class="form-group">
                    
                    <label> Country </label>
                    <select v-model="country" class="form-control" :class="{'is-invalid': !isValidCountry, 'is-valid': isValidCountry}">
                        <option :value="Australia">Australia</option>
                        <option :value="Japan">Japan</option>
                        <option :value="Canada">Canada</option>
                        <option :value="United_States">United States</option>
                        <option :value="United_Kingdom">United Kingdom</option>
                        <option :value="Germany">Germany</option>
                        <option :value="France">France</option>
                        <option :value="Brazil">Brazil</option>
                        <option :value="India">India</option>
                        <option :value="China">China</option>
                        <option :value="South_Korea">South Korea</option>
                        <div class="invalid-feedback" v-if="!isValidCity">Select a country</div>
                    </select>
                </div>

                <button class="btn btn-primary" @click="addShippingInfo()">Add Shipping Info</button>
            </div>


            <div class = "card">

                <div v-if="cardInfo.length != 0">
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
                            <div class="form-group">
                                <label> Card Number </label>
                                <input v-model="cardNumber" type="text" class="form-control" :class="{'is-invalid': !isValidCard, 'is-valid': isValidCard}"> 
                                
                            </div>
                            <div class="form-group" >
                                <label> Card Holder Name</label>
                                <input v-model="cardHolderName" type="text"  class="form-control" :class="{'is-invalid': !isValidCardHolderName, 'is-valid': isValidCardHolderName}">
                                <div class="invalid-feedback" v-if="!isValidCardHolderName">Please enter a valid full name.</div>
                            </div>
                            <div class="form-group" >
                                <label> Expiry Date </label>
                                <input v-model="expDate" type="date"  class="form-control" :class="{'is-invalid': !isValidExpDate, 'is-valid': isValidExpDate}"> 
                                <div class="invalid-feedback" v-if="!isValidExpDate">Please enter a valid expiryDate</div>
                            </div>
                            <div class="form-group" >
                                <label>CVC</label>
                                <input v-model="CVC" type="text" length = "3" class="form-control" :class="{'is-invalid': !isValidCVC, 'is-valid': isValidCVC}">  
                                <div class="invalid-feedback" v-if="!isValidCVC">Please enter a valid 3 digit CVC, located on the back of your card.</div>
                            </div>
                        <!-- i need to write API methods for Cardinfo get store -->
                        <button class="btn btn-primary" v-if="getCardInfos() == null" @click="addCard()">Add Card</button>
                        <button class="btn btn-primary" v-if="(getCardInfos() != null) && (selectedCard == null)" @click="addCard()">Add new Card</button>
                     </div>
                    </div>
            </div>
            <div class = "card">
                <RouterLink v-if="selectedShippingAddress && selectedCard" class="btn btn-primary" @click="purchase()" to="/finalizeOrder" >Purchase </RouterLink>
                <button v-else class="btn btn-secondary">You must select an Address and Card to purchase</button>
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
    <div v-if="this.$store.getters['user/user'] == null">
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
        <div v-else-if="this.$store.getters['user/user'] != null">
            <div class = "container" style="margin-top: 15%;">
                <div class="card" style="background-image: url('https://e0.pxfuel.com/wallpapers/664/353/desktop-wallpaper-acrylic-light-salmon-pink-watercolor-texture-background-by-pink-background-color-iphone-pastel-pink.jpg');background-repeat: no-repeat;background-size: 100% auto;background-position: center center;">
                                    <div class="card-body">
                                        <h5 class="card-title" style="text-align: center;"> Looks like your cart is empty! </h5>
                                    <p class="card-text" style="text-align: center;"> browse the shop and purchase an amazing product</p>
                                    <div class = "conainer"> 
                                        <div class = "row">
                                                <RouterLink style ="margin-right: 50%" class="btn btn-primary" to="/Shop"> Here! </RouterLink>
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
    //All form variables
    data() {
        return {
            cardInfo: [],
            shippinginfo:[],
            selectedCard: null,
            selectedShippingAddress: null,
            fullName: '',
            address: '',
            City: '',
            state: '',
            postCode: '',
            country: '',
            cardNumber: '',
            cardHolderName: '',
            expDate: null,
            CVC: '',
        }
    },
    //computable methods are called on load and on call
    computed: {
        cartItems(){
            return this.$store.getters['cart/cartItems'];
        },
        totalCartPrice() {
            return this.cartItems.reduce((total, product) => total + product.price, 0);
        },
        isValidFullName() {
            return this.fullName.length > 5 && this.fullName.includes(" "); 
        },
        isValidAddress() {
            return this.address.length > 10; 
        },
        isValidCity(){
            return this.City.length > 3;
        },
        isValidState(){
            return this.state.length > 2;
        },
        isValidPostCode(){
            return this.postCode.length > 3 && this.postCode.match(/^[0-9]+$/) != null; 
        },
        isValidCountry(){
            return this.country == null;
        },
        isValidCard(){
            return this.cardNumber.length == 16 && this.cardNumber.match(/^[0-9]+$/) != null;
        },
        isValidCardHolderName(){
            return   this.cardHolderName.length > 5 && this.cardHolderName.includes(" "); 
        }, 
        isValidExpDate(){
            return this.expDate != null && new Date(this.expDate) > new Date(); 
        },
        isValidCVC(){
            return this.CVC.length == 3 && this.CVC.match(/^[0-9]+$/) != null;
        }

        
    },
    //When first loading the page
        async mounted() {
                this.cardInfo = await this.getCardInfos();
                this.shippinginfo = await this.getShippingInfos();
            },


        //Page methods 
        methods: {
            selectCard(card){
                this.selectCard = card;
                console.log(card.cardHolderName);
            },
            //async get card infos awaits a call to the card info api with the secret hashed key and returns all cards under local storaged user.
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
                if(this.isValidCardForm()){
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
                        window.location.reload();
                        //bootstrap message show. 

                    }).catch((error) => {
                        console.error(error);
                    });
                }
            },

            addShippingInfo(){
                if(this.isValidAddressForm()){
                    const key = this.$store.getters['hashedKeys/shippingInfoHashedKey'];
                    const newShippingInfo ={
                        userId: this.$store.getters['user/user'].userID,
                        fullName: this.fullName,
                        address: this.address,
                        city: this.city,
                        state: this.state,
                        postalCode: this.postCode,
                        country: this.country,
                    };
                    axios.post(`http://localhost:8090/api/shippingInfo/${key}/create`, newShippingInfo).then(() => {
                        console.log("address added");
                        window.location.reload();
                        // bootstrap msg show
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            },

            async purchase(){
                const newOrder = {
                    userId: this.$store.getters['user/user'].userID,
                    totalAmount: this.cartItems.reduce((total, product) => total + product.price, 0),  
                };
                //Create a new order
                await axios.post(`http://localhost:8090/api/orders/create`, newOrder).then((response) => {
                    console.log("new order added");
                    console.log(response.data);
                    let orderId = response.data.orderId;
                    //then add all the prder items
                    this.$store.getters['cart/cartItems'].forEach((element) => {
                        const orderItem = {
                            orderId: orderId,
                            productId: element.productId,
                            quantity: element.quantity,
                            price: element.price
                        };
                        axios.post(`http://localhost:8090/api/orderItems/create`, orderItem).then((response) => {
                            console.log("item added");
                            console.log(response.data);
                        }).catch((error) => {
                            console.error(error);
                        })
                    });
                    //empty the local cart 
                    this.$store.dispatch('cart/clear');
                    window.location.reload();
                    //Send them to a confirmation page. 

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
            isValidAddressForm() {
                return this.isValidFullName && this.isValidAddress && this.isValidPostCode && this.isValidState && this.isValidCity;
            },
            isValidCardForm(){
                return this.isValidCard && this.isValidCardHolderName && this.isValidCVC && this.isValidExpDate;
            }

           
            //Create new Card entry to the database, 
            //refresh, 
            //Save the order to the database as a new order with cart items. 
        },

}
</script>
