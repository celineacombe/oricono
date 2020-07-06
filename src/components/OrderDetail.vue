<template>
  <div class="OrderDetail">
    <table>
      <tr>
        <th>Nom</th>
        <th>Couleur</th>
        <th>Prix</th>
      </tr>
      <tr v-for="teddy in basket" :key="teddy._id">
        <td>{{teddy.name}}</td>
        <td>{{teddy.colors}}</td>
        <td>{{teddy.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
name: 'OrderDetail',
computed: {
  basket () {
    return this.$store.getters.basket
  }
}
}
</script>

<style>
</style>