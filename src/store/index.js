import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    lastOrderId: ''
  },
  mutations: {
    addToBasket(state, teddy) {
      console.log('Mutation Add to BAsket')
      state.basket.push(teddy)
    },
    setLastOrderId(state, orderId) {
      state.lastOrderId = orderId
    }
  },
  actions: {
    addToBasket(context, teddy) {
      console.log('Action Add to BAsket')
      context.commit('addToBasket', teddy)
    },
    setLastOrderId(context, orderId) {
      context.commit('setLastOrderId', orderId)
    }
  },
  getters: {
    basket: state => {
      return state.basket
    },
    totalAmount: (state, getters) => {
      let basket = getters.basket
      let sum = 0
      for (let product of basket) {
        sum += product.price
      }
      return sum
    },
    lastOrderId: state => {
      return state.lastOrderId
    }
  }
})
