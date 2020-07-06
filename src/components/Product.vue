<template>
  <div class="Product">
    <ul class="liste-prod">
      <li class="produit" v-for="teddy in teddies" :key="teddy._id">
        <img class="teddyImage" :src="teddy.imageUrl" />
        <p class="teddyName">Nom :{{teddy.name}}</p>
        <!-- <p class="teddyDescription">Description:{{teddy.description}}</p> -->
        <!-- <p class="teddyColors">Disponible dans les couleurs :{{teddy.colors}}</p> -->
        <p class="teddyPrice">Prix: {{teddy.price}}</p>
        <button class="selection" @click="goToDetail">
          <router-link :to="'/detail/'+teddy._id">Voir cet article</router-link>
        </button>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'Product',
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

    //   try {
    //       let response = await axios.get('http://localhost:3000/api/teddies')
    //       this.teddies = response.data
    //   } catch (error) {
    //     console.log(error)
    //   }

  },
  methods: {
      //goToDetail(): 
  }
}
</script>

<style scoped>
.teddyImage {
  width: 150px;
}
</style>