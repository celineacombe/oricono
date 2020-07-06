<template>
  <div class="form">
    <form action class="contact">
      Vos coordonnées
      <br />
      <label for="firstName">Prénom :</label>
      <input type="text" id="firstName" name="firstName" v-model="contact.firstName" />
      <br />
      <label for="lastName">Nom :</label>
      <input type="text" id="lastName" name="lastName" v-model="contact.lastName" />
      <br />
      <label for="address">Adresse :</label>
      <input type="text" id="address" name="address" v-model="contact.address" />
      <br />
      <label for="postalCode">Code postal :</label>
      <input type="number" id="postalCode" name="postalCode" />
      <br />
      <label for="city">Ville :</label>
      <input type="text" id="city" name="city" v-model="contact.city" />
      <br />
      <label for="email">Adresse électronique :</label>
      <input type="email" id="email" name="email" v-model="contact.email" />
      <br />
      <button class @click="checkoutOrder">Valider la commande</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contact',
    data () {
      return {
        contact: {
          firstName:'',
          lastName: '',
          address: '',
          city: '',
          email: ''
        }
      }
    },
    methods:  {
    checkoutOrder (event) {
      event.preventDefault()
      console.log('checkoutOrder')
      // génrérer une invoice
      // 1 récupérer les données du basket
      let basket = this.$store.getters.basket
      let invoice = {
        products: [],
        contact: {

        }
      }
      for(let product of basket) {
        invoice.products.push(product._id)

      }
      // 2 générer l'objet contact
      invoice.contact=this.contact

      console.log(invoice)
      // envoi au serveur
axios
.post('http://localhost:3000/api/teddies/order', invoice)
.then(response => {
  let orderId = response.data.orderId
  console.log(orderId)
  // open THanks.vue 
  this.$store.dispatch('setLastOrderId', orderId)
     this.$router.push('Thanks')
      })
.catch(error => {
  console.log(error)
})


      // ouvrir la view Thanks


    }   
  }
}
</script>

<style>
</style>