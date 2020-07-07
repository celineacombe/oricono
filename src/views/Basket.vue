
<template>
  <section class="basket">
    <HeaderPage :headerClass="'basket'" :titre="'Votre panier'"></HeaderPage>
    <div v-if="basket.length>0">
      <BasketDetail></BasketDetail>
      <Contact></Contact>
    </div>
    <div v-else>Oh là là ton panier est vide</div>
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
