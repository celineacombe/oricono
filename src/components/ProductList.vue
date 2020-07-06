<template>
  <section class="listProd">
    <div class="main">
      <Product></Product>
    </div>
  </section>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
name: 'ProductList',
components: {
  Product
}
}
</script>

<style>
</style>