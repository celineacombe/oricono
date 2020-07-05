
<template>
  <section class="basket">
    <HeaderPage :headerClass="'basket'" :titre="'Votre panier'"></HeaderPage>
    <div class="main">
      <BasketDetail></BasketDetail>
    </div>
    <Contact></Contact>
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
  }
}
</script>

<style>
</style>
