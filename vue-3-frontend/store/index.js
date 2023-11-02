import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // Import vuex-persistedstate
import user from './modules/user';
import cart from './modules/cart';
import hashedKeys from './modules/HashedKeys';

export default createStore({
  modules: {
    user,
    cart,
    hashedKeys,
  },
  plugins: [createPersistedState()], // Add vuex-persistedstate as a plugin
});