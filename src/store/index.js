import Vue from 'vue'
import Vuex from 'vuex'
import user from './User'
import loading from './loading'
import util from './util'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
   user,
   loading,
   util
  },
  strict: process.env.NODE_ENV !== 'production'
})
