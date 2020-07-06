<template>
  <div>
    <div>Merci pour votre commande n° {{orderId}} d'un montant de {{totalAmount}}</div>
  </div>
</template>

<script>
export default {
name: 'ThankOrder',
computed: {
  orderId () {
    return this.$store.getters.lastOrderId
  },
  totalAmount () {
    return this.$store.getters.totalAmount
  }
}
}
</script>

<style>
</style>