
<template>
  <section class="basket">
    <header>
      <h1>Votre panier</h1>
    </header>
    <div class="main">
      <ul class="basket-contents">
        <li class="basket-article">Liste des articles du panier (à récupérer dans le component "x")</li>
      </ul>
    </div>
    <div class="form">
      <form action class="contact">
        Vos coordonnées
        <br />
        <label for="firstName">Prénom :</label>
        <input type="text" id="firstName" name="firstName" />
        <br />
        <label for="lastName">Nom :</label>
        <input type="text" id="lastName" name="lastName" />
        <br />
        <label for="adress">Adresse :</label>
        <input type="text" id="adress" name="adress" />
        <br />
        <label for="postalCode">Code postal :</label>
        <input type="number" id="postalCode" name="postalCode" />
        <br />
        <label for="town">Ville :</label>
        <input type="text" id="town" name="town" />
        <br />
        <label for="email">Adresse électronique :</label>
        <input type="email" id="email" name="email" />
        <br />
        <input type="submit" value="Valider" />
      </form>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Basket from '@/components/Basket.vue'

// export default {
//   name: 'Basket',
//   components: {
//     Basket
//   }
// }
</script>

<style>
</style>
