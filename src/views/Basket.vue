
<template>
  <section class="basket">
    <HeaderPage :headerClass="'basket'" :titre="'Votre panier'"></HeaderPage>
    <div v-if="basket.length>0">
      <BasketDetail></BasketDetail>
      <Contact></Contact>
    </div>
    <div v-else>
      <b-row class="justify-content-md-center">
        <b-card class="col-md-8">
          <b-card-text>Votre panier est actuellement vide !</b-card-text>

          <b-button :to="'/'" variant="primary">Commencer vos achats</b-button>
        </b-card>
      </b-row>
    </div>
  </section>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import BasketDetail from '@/components/BasketDetail.vue'
import Contact from '@/components/Contact.vue'
// @ is an alias to /src
// import BasketList from '@/components/BasketList.vue'

export default {
  name: 'Basket',
  components: {
    HeaderPage,
    BasketDetail,
    Contact
  },
  computed: {
    basket () {
      return this.$store.getters.basket
    }
  }
}
</script>

<style>
</style>
