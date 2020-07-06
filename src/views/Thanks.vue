<template>
  <div>
    <HeaderPage :titre="'Merci'"></HeaderPage>
    <ThankOrder></ThankOrder>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import ThankOrder from '@/components/ThankOrder.vue'
export default {
name: 'Thanks',
components: {
    HeaderPage,
    ThankOrder
}
}
</script>

<style>
</style>