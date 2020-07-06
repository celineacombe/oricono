<template>
  <div class="Detail">
    <HeaderPage :headerClass="'detail'" :titre="'Fiche produit'"></HeaderPage>
    <ProductDetail></ProductDetail>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import ProductDetail from '@/components/ProductDetail.vue'
export default {
    name: 'Detail',
    components: {
      HeaderPage,
      ProductDetail
    }

}
</script>

<style>
</style>