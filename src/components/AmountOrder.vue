<template>
  <b-row class="justify-content-md-center">
    <b-card
      class="col-md-8"
      title="Montant de votre commande"
      sub-title="(montant TTC)"
      align="center"
    >
      <b-card-text>{{totalAmount}}</b-card-text>
    </b-card>
  </b-row>
</template>

<script>
export default {
name: 'AmountOrder',
computed: {
  totalAmount () {
    return this.$store.getters.totalAmount
  }
}
}
</script>

<style>
</style>