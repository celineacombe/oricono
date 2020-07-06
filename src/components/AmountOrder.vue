<template>
  <div class="AmountOrder">{{totalAmount}}</div>
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