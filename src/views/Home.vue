<template>
  <div class="home">
    <HeaderPage :headerClass="'home'" :titre="'Nos ours en peluche faits à la main'"></HeaderPage>
    <ProductList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import HeaderPage from '@/components/HeaderPage.vue'

export default {
  name: 'Home',
  components: {
    ProductList,
    HeaderPage
  }
}
</script>

<style>
</style>
