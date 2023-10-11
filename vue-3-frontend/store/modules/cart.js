const state = {
    cartItems: [], //i can put in entire product obects or just Id's.
  };
  
  const mutations = {
    addItem(state, product) {
      state.cartItems.push(product); // call 
    },
    deleteItem(state, index) {
      state.cartItems.splice(index, 1); 
    },
  };
  
  const actions = {
    clear({ commit }) {         // call this.$store.dispatch('cart/clear');
      commit('deleteAllItems');
    },
    deleteCartItem({ commit, state }, productId) {  // call this.$store.dispatch('cart/deleteCartItem', this.cartItems[index]);
      const index = state.cartItems.indexOf(productId);
      if (index !== -1) {
        commit('deleteItem', index);
      }
    },
    addCartItem({commit}, product){
        commit('addItem', product);
    },
  };
  
  const getters = {
    cartItems: (state) => state.cartItems, //call this.$store.getters['cart/cartItems'];
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
  };