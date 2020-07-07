<template>
  <div>
    <div>Merci pour votre commande n° {{orderId}} d'un montant de {{totalAmount}}</div>
  </div>
</template>

<script>
export default {
name: 'ThankOrder',
data () {
  return {
    totalAmount: 0
  }
},
mounted () {
this.totalAmount = this.$store.getters.totalAmount
this.$store.dispatch('emptyBasket')
},
computed: {
  orderId () {
    return this.$store.getters.lastOrderId
  }

},
}
</script>

<style>
</style>