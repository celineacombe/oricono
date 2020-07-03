<template>
  <div class="main">
    <header :class="'header_'+headerClass">
      <h1>{{titre}}</h1>
    </header>
  </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    props: {
      headerClass: {
          type: String,
          default: 'home'
      },
      titre: {
        type: String,
        default: 'Mon titre'
      },
    },
    data ()  {
        return {
            
        }
    }

}
</script>

<style>
.header_home {
  background-image: url("../assets/images/teddies-family.jpg");
}
.header_detail {
  background-image: url("../assets/images/teddies-bear.jpg");
}
.header_basket {
  background-image: url("../assets/images/basket.jpg");
}
</style>