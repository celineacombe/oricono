<template>
  <div class="basketDetail">
    <OrderDetail></OrderDetail>
    <AmountOrder></AmountOrder>
  </div>
</template>

<script>
import OrderDetail from '@/components/OrderDetail.vue'
import AmountOrder from '@/components/AmountOrder.vue'
export default {
name: 'BasketDetail',
components: {
OrderDetail,
AmountOrder
}
}
</script>

<style>
</style>