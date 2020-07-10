<template>
  <b-form-row class="justify-content-md-center">
    <b-card bg-variant="light" class="col-md-6">
      <b-form-group
        label-cols-lg="3"
        label="Vos coordonnées"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Nom :"
          label-align-sm="right"
          label-for="nested-lastName"
        >
          <b-form-input id="lastName" v-model="contact.lastName" required></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Prénom :"
          label-align-sm="right"
          label-for="nested-firstName"
        >
          <b-form-input id="firstName" v-model="contact.firstName" required></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Adresse :"
          label-align-sm="right"
          label-for="nested-address"
        >
          <b-form-input id="address" v-model="contact.address" required></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Ville :"
          label-align-sm="right"
          label-for="nested-city"
        >
          <b-form-input id="city" v-model="contact.city" required></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Email :"
          label-align-sm="right"
          label-for="nested-email"
        >
          <b-form-input id="email" v-model="contact.email" required></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="3" label-cols-lg="2" label-align-sm="right">
          <b-button type="submit" variant="primary" @click="checkoutOrder">Valider la commande</b-button>
        </b-form-group>
      </b-form-group>
    </b-card>
  </b-form-row>

  <!-- <form action class="contact">
      Vos coordonnées
      <br />
      <label for="firstName">Prénom :</label>
      <input type="text" id="firstName" name="firstName" v-model="contact.firstName" required />
      <br />
      <label for="lastName">Nom :</label>
      <input type="text" id="lastName" name="lastName" v-model="contact.lastName" required />
      <br />
      <label for="address">Adresse :</label>
      <input type="text" id="address" name="address" v-model="contact.address" required />
      <br />
      <label for="city">Ville :</label>
      <input type="text" id="city" name="city" v-model="contact.city" required />
      <br />
      <label for="email">Adresse électronique :</label>
      <input type="email" id="email" name="email" v-model="contact.email" required />
      <br />
      <button class @click="checkoutOrder">Valider la commande</button>
  </form>-->
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
      if (
        this.contact.firstName === '' ||
        this.contact.lastName === ''  ||
        this.contact.address === ''  ||
        this.contact.city === ''  ||
        this.contact.email === ''  ||
        invoice.products.length === 0){
        console.log('error validation')
      } else {
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
      }
    }   
  }
}
</script>

<style>
</style>