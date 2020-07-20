import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    lastOrderId: ''
  },
  mutations: {
    addToBasket(state, payload) {
      console.log('Mutation Add to Basket')
      console.log('payload', payload)
      // state.basket.push(teddy)
      let teddy = payload
      let quantity = payload.quantity
      let selectedColor = payload.selectedColor
      let i = 0
      let found = false
      while (i < state.basket.length && !found) {
        if (state.basket[i]._id === teddy._id && state.basket[i].selectedColor === selectedColor) {
          found = true
          state.basket[i].quantity += quantity
          state.basket[i].totalPrice = state.basket[i].price * state.basket[i].quantity
        }
        i++
      }
      if (found === false) {
        let item = payload
        item.quantity = quantity
        item.totalPrice = teddy.price * quantity
        item.selectedColor = selectedColor
        state.basket.push(item)
      }
      console.log('basket', state.basket)
    },
    setLastOrderId(state, orderId) {
      state.lastOrderId = orderId
    },
    emptyBasket(state) {
      state.basket.splice(0, state.basket.length)
    },
    removeProduct(state, payload) {
      console.log('Mutation Remove a product')
      console.log('remove mutation payload', payload)

      let id = payload.id
      let selectedColor = payload.selectedColor
      let i = 0
      let found = false
      let indexToRemove = -1
      while (i < state.basket.length && !found) {
        if (state.basket[i]._id === id && state.basket[i].selectedColor === selectedColor) {
          //on a trouvé le bon objet
          found = true
          indexToRemove = i
        } else {
          //on n'a pas trouvé le bon objet
        }
        i++
      }
      if (indexToRemove != -1) {
        state.basket.splice(indexToRemove, 1)
      } else {
        console.log('objet non trouvé dans le panier')
      }
    },
    changeQuantity(state, payload) {
      let id = payload.id
      let selectedColor = payload.selectedColor
      let i = 0
      let found = false
      let indexToRemove = -1
      let quantity = payload.quantity
      console.log("changeQuantity")
      while (i < state.basket.length && !found) {
        if (state.basket[i]._id === id && state.basket[i].selectedColor === selectedColor) {
          //on a trouvé le bon objet
          found = true
          indexToRemove = i
        } else {
          //on n'a pas trouvé le bon objet
        }
        i++
      }
      if (indexToRemove != -1) {
        state.basket[indexToRemove].quantity += quantity
        if (state.basket[indexToRemove].quantity > 0) {
          state.basket[indexToRemove].totalPrice = state.basket[indexToRemove].price * state.basket[indexToRemove].quantity
        } else {
          console.log("quantity = 0 , panier vide")
          state.basket.splice(indexToRemove, 1)
        }
      } else {
        console.log("objet non trouvé")
      }
    }
  },
  actions: {
    addToBasket(context, payload) {
      console.log('Action Add to Basket')
      console.log('payload action', payload)
      context.commit('addToBasket', payload)
    },
    setLastOrderId(context, orderId) {
      context.commit('setLastOrderId', orderId)
    },
    emptyBasket(context) {
      context.commit('emptyBasket')
    },
    removeProduct(context, payload) {
      context.commit('removeProduct', payload)
    },
    incrementProduct(context, payload) {
      payload.quantity = 1
      context.commit('changeQuantity', payload)
    },
    decrementProduct(context, payload) {
      payload.quantity = -1
      context.commit('changeQuantity', payload)
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
        sum += product.totalPrice
      }
      return sum
    },
    lastOrderId: state => {
      return state.lastOrderId
    },
  }
})
