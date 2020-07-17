<template>
  <b-row class="justify-content-md-center">
    <b-card bg-variant="light" class="col-md-8">
      <b-form-group
        label-cols-lg="4"
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
          invalid-feedback="Format du nom incorrect"
          :state="lastNameState"
        >
          <b-form-input
            id="lastName"
            v-model="contact.lastName"
            placeholder="Veuillez saisir votre nom (Mettre une majuscule)"
            :state="lastNameState"
            trim
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Prénom :"
          label-align-sm="right"
          label-for="nested-firstName"
          invalid-feedback="Format du prénom incorrect"
          :state="firstNameState"
        >
          <b-form-input
            id="firstName"
            v-model="contact.firstName"
            :state="firstNameState"
            placeholder="Veuillez saisir votre prénom (Mettre une majuscule)"
            trim
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Adresse :"
          label-align-sm="right"
          label-for="nested-address"
          invalid-feedback="Format de l'adresse incorrect"
          :state="addressState"
        >
          <b-form-input
            id="address"
            v-model="contact.address"
            :state="addressState"
            placeholder="Veuillez saisir votre adresse"
            trim
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Code postal :"
          label-align-sm="right"
          label-for="nested-city"
          invalid-feedback="Format du code postal incorrect"
          :state="zipCodeState"
        >
          <b-form-input
            id="zipCode"
            v-model="contact.zipCode"
            :state="zipCodeState"
            placeholder="Veuillez saisir votre code postal"
            maxlength="5"
            trim
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Ville :"
          label-align-sm="right"
          label-for="nested-city"
          invalid-feedback="Format du ville incorrect"
          :state="cityState"
        >
          <b-form-input
            id="city"
            v-model="contact.city"
            :state="cityState"
            placeholder="Veuillez saisir votre ville"
            trimrequired
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Email :"
          label-align-sm="right"
          label-for="nested-email"
          invalid-feedback="Format du email incorrect"
          :state="emailState"
        >
          <b-form-input
            id="email"
            v-model="contact.email"
            :state="emailState"
            placeholder="Veuillez saisir votre email"
            trim
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="3" label-cols-lg="2" label-align-sm="right">
          <b-button type="submit" variant="primary" @click="checkoutOrder">Valider la commande</b-button>
        </b-form-group>
      </b-form-group>
    </b-card>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      contact: {
        firstName: null,
        lastName: null,
        address: null,
        zipCode: null,
        city: null,
        email: null
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
    },
    // Validation des nom et prénom
    checkName (strToCheck) {
      const regex = RegExp ("^[A-Za-zÂÊÎÔÛÄËÏÖÜÀÆÇÉÈŒÙàáâäçèéêëìíîïñòóôöùúûü -']{2,}$")
      return regex.test(strToCheck)
    },
    checkAddress (strToCheck) {
      const regexAddress = RegExp ("^[A-Za-z0-9ÂÊÎÔÛÄËÏÖÜÀÆÇÉÈŒÙàáâäçèéêëìíîïñòóôöùúûü -',.]+$")
      return regexAddress.test(strToCheck)
    },
    checkZipCode (strToCheck) {
      const regexZipCode = RegExp ("^[0-9]{5,5}$")
      return regexZipCode.test(strToCheck)
    },
    checkCity (strToCheck) {
      const regexCity = RegExp("^[A-Za-zÂÊÎÔÛÄËÏÖÜÀÆÇÉÈŒÙàáâäçèéêëìíîïñòóôöùúûü -']+$")
      return regexCity.test(strToCheck)
   },
    checkEmail (strToCheck) {
      const regexEmail = RegExp (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      return regexEmail.test(strToCheck)
    }
  },
  computed: {
    lastNameState () {
      if (this.contact.lastName === null){
        return null
      }else {
        return this.checkName(this.contact.lastName)
      }
    },
    firstNameState () {
      if (this.contact.firstName === null){
        return null
      }else {
        return this.checkName(this.contact.firstName)
      }
    },
    addressState () {
      if (this.contact.address === null){
        return null
      }else {
        return this.checkAddress(this.contact.address)
      }
    },
    zipCodeState () {
       if (this.contact.zipCode === null){
        return null
      }else {
        return this.checkZipCode(this.contact.zipCode)
      }
    },
    cityState () {
       if (this.contact.city === null){
        return null
      }else {
        return this.checkCity(this.contact.city)
      }
    },
    emailState () {
       if (this.contact.email === null){
        return null
      }else {
        return this.checkEmail(this.contact.email)
      }
    },
  
  }
}

</script>

<style>
</style>