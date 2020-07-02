<template>
  <section class="listProd">
    <header class="header">
      <h1>Nos ours en peluche faits à la main</h1>
    </header>
    <div class="main">
      <ul class="liste-prod">
        <li class="produit" v-for="teddy in teddies" :key="teddy._id">
          <br />
          <p class="teddyImage">{{teddy.imageUrl}}</p>
          <p class="teddyName">Nom :{{teddy.name}}</p>
          <p class="teddyDescription">Description:{{teddy.description}}</p>
          <p class="teddyColors">Disponible dans les couleurs :{{teddy.colors}}</p>
          <p class="teddyPrice">Prix: {{teddy.price}}</p>
          <br />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
name: 'ProductList',
 
  data () {
      return {
          teddies: [],
          loading: true,
          errored: false
      }
  },
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

  }
}
</script>

<style>
.teddyImage {
  color: blue;
}
.teddyName {
  color: crimson;
}
.teddyDescription {
  color: cadetblue;
}
.teddyPrice {
  color: black;
  font-weight: bold;
}
.teddyColors {
  color: chartreuse;
}
</style>