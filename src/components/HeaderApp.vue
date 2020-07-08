<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand :to="'/'">Orinoco</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav">
        <b-nav-item :to="'/'">Home</b-nav-item>
        <b-nav-item :to="'/basket'">Panier</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
name: 'HeaderApp'
}
</script>

<style>
</style>