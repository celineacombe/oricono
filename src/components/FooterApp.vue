<template>
  <div class="main">
    <footer class="footerApp">
      <div class="cvg">CVG</div>
      <div class="mentionsLegales">Mentions Légales</div>
      <div class="PolConf">Politique de confidentialité</div>
      <div class="contact">Contact</div>
    </footer>
  </div>
</template>

<script>
export default {
name: 'FooterApp'
}
</script>

<style>
.footerApp {
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>