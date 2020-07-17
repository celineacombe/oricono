<template>
  <b-row class="justify-content-md-center">
    <b-card no-body class="overflow-hidden" style="max-width: 1025px;" v-if="loaded">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="teddy.imageUrl" alt="Image" class="rounded-0" align="center"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="teddy.name">
            <b-card-text>
              <b-col md="6">
                Couleur(s) disponible(s)
                <b-form-select v-model="selectedColor" :options="teddy.colors"></b-form-select>
              </b-col>
              <b-col md="6">
                Quantité
                <b-form-input type="number" min="1" max="10" v-model="selectedQuantity"></b-form-input>
              </b-col>
              <b-col md="6">
                <p class="teddyPrice">Prix : {{formatPriceLocal(teddy.price)}}</p>
              </b-col>
              <p>
                <b-button class="panier" variant="primary" @click="addToBasket">Ajouter au panier</b-button>
              </p>
              <p class="teddyDescription">Description:{{teddy.description}}</p>
              <p class="teddyColors">
                Disponible dans les couleurs :
                <span
                  v-for="color in teddy.colors"
                  :key="color"
                >&nbsp;{{color}}</span>
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>

<script>
import axios from 'axios'
import {formatPrice} from '@/functions'
export default {
    name: 'ProductDetail',
data () {
      return {
          teddy: {},
          id: this.$route.params.id,
          selectedColor: '',
          selectedQuantity: 1,
          loading: true,
          errored: false,
          loaded: false
          }},
mounted () {
  axios
    .get('http://localhost:3000/api/teddies/'+this.id)
    .then(response => {
      this.teddy = response.data
      console.log('teddy', this.teddy)
      this.selectedColor=this.teddy.colors[0]
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => {
      this.loading = false
      this.loaded = true
      })

  },
  methods: {
    addToBasket() {
      console.log('AddToBasket ' + this.selectedColor)
      console.log('detail Teddy', this.teddy)
      let item = Object.assign({}, this.teddy)
      item.selectedColor=this.selectedColor
      item.quantity=this.selectedQuantity
      this.$store.dispatch('addToBasket', item)
    },
    formatPriceLocal(price) {
      return formatPrice(price)
    }
  }
}

</script>

<style>
.rounded-0 {
  margin-left: 0px;
  padding-left: 20px;
}
</style>