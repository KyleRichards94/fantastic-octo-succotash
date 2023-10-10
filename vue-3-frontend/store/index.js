import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // Import vuex-persistedstate
import user from './modules/user';

export default createStore({
  modules: {
    user,
  },
  plugins: [createPersistedState()], // Add vuex-persistedstate as a plugin
});