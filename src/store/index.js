import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import item from './modules/wardrobe'

export default new Vuex.Store({
  modules: {
    item
  }
})
