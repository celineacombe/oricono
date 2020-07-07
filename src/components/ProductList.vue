<template>
  <b-container fluid>
    <b-row align-h="around">
      <b-card-group deck>
        <Product :teddy="teddy" v-for="teddy in teddies" :key="teddy._id"></Product>
      </b-card-group>
    </b-row>
  </b-container>
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
</style>