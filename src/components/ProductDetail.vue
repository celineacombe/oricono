<template>
  <div class="productDetail">
    <section>
      <header>
        <img class="teddyImage" :src="teddy.imageUrl" />
        <h1 class="productName">{{teddy.name}}</h1>
        <select name id class="choixCouleur">
          <option>Couleur</option>
          <option v-for="color in teddy.colors" :key="color">{{color}}</option>
        </select>
        <p class="teddyPrice">Prix: {{teddy.price}}</p>
        <button class="panier">Ajouter au panier</button>
      </header>
      <div class="detail">
        <p class="teddyName">Nom :{{teddy.name}}</p>
        <p class="teddyId">Rérférence :{{teddy._id}}</p>
        <p class="teddyDescription">Description:{{teddy.description}}</p>
        <p class="teddyColors">
          Disponible dans les couleurs :
          <span
            v-for="color in teddy.colors"
            :key="color"
          >&nbsp;{{color}}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ProductDetail',
data () {
      return {
          teddy: {},
          id: this.$route.params.id,
          loading: true,
          errored: false
      }},
      mounted () {
    axios
      .get('http://localhost:3000/api/teddies/'+this.id)
      .then(response => {
        this.teddy = response.data
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

<style scoped>
.teddyImage {
  width: 150px;
}
</style>