//:p Html Nav bar with 4 plain options

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

</script>

<script>

export default {
    name: 'App',
    components: {
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
    logout() {
      
      this.$store.dispatch('user/logout'); 
      window.location.reload();
    },
  },

//   this.$store.dispatch('user/logout');
//           this.$router.push('/');

// when this code runs it logs the user out and sends them back to the home page, however the page must be refereshed before the users view is changed to reflect the fact that they are not logged in anymore but if i write this

// this.$store.dispatch('user/logout');
//           this.$router.push('/');
// window.location.reload();

// it reloads the page it was called from instead of the homepage, how can I send the user to the homepage and have the homepage reload itself
  
}

</script>

<template>
  <!-- Nav bar Items  -->
  <div class="wrapper" style="background-color: moccasin;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/Home">Home</RouterLink>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        

        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Shop">Shop</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/CommunityHub">Community Hub</RouterLink>
            </li>
            <li class="nav-item" v-if="this.$store.getters['user/userId'] == null">
              <RouterLink class="nav-link" to="/LoginCard">Login</RouterLink>
            </li>
            <li class="nav-item" v-if="this.$store.getters['user/userId'] == null">
              <RouterLink class="nav-link" to="/signUp">Signup</RouterLink>
            </li>

            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  cart <!-- most likely need to change user store to actually storing the whole user for this and everything else -->
                </button>
                <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton2">

                  <!-- cart items -->
                      <li class="list-group-item" v-for="product in cartItems" :key="product.id">
                        <div class ="row">
                        <div class="col">
                          <img class="card-img-sm" style="width:64px"
                            src="https://th.bing.com/th/id/OIP.SsGFYFL4_Xn4BXwx8H3mBwHaE8?pid=ImgDet&rs=1"
                            alt="Card image cap">
                        </div>
                        <div class = "col">
                          <div >
                            {{ product.productName }}
                          </div>
                          <hr>
                          <div >
                            ${{ product.price}}
                          </div>
                        </div>
                      </div>
                      <hr>
                    </li>
                  <!-- Price -->
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-md-6">Total:</div>
                        <div class="col-md-6 text-end">$ {{ totalCartPrice }}</div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <hr>
                      <div class="row">
                        <RouterLink class="btn btn-dark" to="/signUp">Checkout / edit</RouterLink>
                      </div>
                      <hr>
                    </li>
                                
                </ul>
              </div>
            </li>



            <!-- Drop down Menu  -->
           <div class="userLogged" v-if="this.$store.getters['user/userId'] != null">
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  (Username Here) <!--  most likley need to change user store to actually storing whole user for this and everything else -->
                </button>
                <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton1">
                  <li >
                    <RouterLink class="dropdown-item" to="/MyAccount">Profile</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/favouritePosts">View Favourites</RouterLink>
                  </li>
                  <li v-if="this.$store.getters['user/isStaff'] == true">
                    <RouterLink class="dropdown-item" to="/ManageProducts">Manage Products</RouterLink>
                  </li>
                  <li> 
                    <RouterLink @click="logout" class="dropdown-item" to="/LogoutCard">Logout</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
           </div> 
           
          </ul>

          
        </div>


      </div>
    </nav>
  </div>

  <router-view />
</template>

<style></style>
