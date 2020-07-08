<template>
  <b-row align-h="around" align-v="center">
    <b-card-group deck>
      <Product :teddy="teddy" v-for="teddy in teddies" :key="teddy._id"></Product>
    </b-card-group>
  </b-row>
</template>

<script>
import Product from '@/components/Product.vue'
import axios from 'axios'
export default {
name: 'ProductList',
components: {
  Product
},
data () {
      return {
          teddies: [],
          loading: true,
          errored: false
      }},
mounted () {
    axios
      .get('http://localhost:3000/api/teddies')
      .then(response => {
        this.teddies = response.data
      })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      }
}
</script>

<style>
.card-deck {
  margin-top: 20px;
}
</style>