import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0
    },
    getters: {
        getCount: state => state.count
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      },
      actionInput(context) {
        context.commit('increment')
      }
    }
})
