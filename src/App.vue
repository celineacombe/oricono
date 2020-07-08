<template>
  <b-container fluid>
    <HeaderApp></HeaderApp>
    <router-view />
    <FooterApp></FooterApp>
  </b-container>
</template>


<script>
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
export default {
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
