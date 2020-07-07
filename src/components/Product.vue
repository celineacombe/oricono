<template>
  <div class="Product">
    <b-card
      :title="teddy.name"
      :img-src="teddy.imageUrl"
      img-alt="Image"
      img-top
      img-height="206px"
      img-width="316px"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 teddyImage"
    >
      <b-card-text>
        {{teddy.description}}
        <br />
        {{teddy.price}}
      </b-card-text>

      <b-button :to="'/detail/'+teddy._id" variant="primary">Voir cet article</b-button>
    </b-card>

    <!-- Avant Bootstrap -->
    <!-- <img class="teddyImage" :src="teddy.imageUrl" />
    <p class="teddyName">Nom :{{teddy.name}}</p>-->
    <!-- <p class="teddyDescription">Description:{{teddy.description}}</p> -->
    <!-- <p class="teddyPrice">Prix: {{teddy.price}}</p>
    <router-link :to="'/detail/'+teddy._id" tag="button" :key="teddy._id">Voir cet article</router-link>-->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
name: 'Product',
props:{teddy:{
  type: Object
}},
data () {
      return {
    
      }},
    
  methods: {
      //goToDetail(): 
  }
}
</script>

<style scoped>
</style>