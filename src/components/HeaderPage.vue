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

<style lang="scss">
header {
  background-position-y: center;
  height: 200px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}
.header {
  &_home {
    background-image: url("../assets/images/teddies-family.jpg");
  }
  &_detail {
    background-image: url("../assets/images/teddies-bear.jpg");
  }
  &_basket {
    background-image: url("../assets/images/basket.jpg");
  }
}
</style>>
