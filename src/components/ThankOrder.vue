<template>
  <b-row class="justify-content-md-center">
    <b-card class="col-md-8">
      <b-card-text>Merci pour votre commande n° {{orderId}} d'un montant de {{totalAmount}}</b-card-text>
    </b-card>
  </b-row>
</template>

<script>
import {formatPrice} from '@/functions'
export default {
name: 'ThankOrder',
data () {
  return {
    totalAmount: 0
  }
},
mounted () {
this.totalAmount = formatPrice(this.$store.getters.totalAmount)
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