
<template>
  <section class="basket">
    <HeaderPage :headerClass="'basket'" :titre="'Votre panier'"></HeaderPage>
    <div class="main">
      <ul class="basket-contents">
        <li class="basket-article">Liste des articles du panier (à récupérer dans le component "x")</li>
      </ul>
    </div>
    <Contact></Contact>
  </section>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import Contact from '@/components/Contact.vue'
// @ is an alias to /src
// import BasketList from '@/components/BasketList.vue'

export default {
  name: 'Basket',
  components: {
    Contact,
    HeaderPage
  }
}
</script>

<style>
</style>
