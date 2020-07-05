<template>
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
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>
</style>