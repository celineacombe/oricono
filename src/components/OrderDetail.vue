<template>
  <b-row class="justify-content-md-center">
    <b-card class="col-md-8">
      <b-table
        stacked="sm"
        hover
        striped
        bordered
        borderless
        :items="basket"
        :fields="fields"
        head-variant="dark"
        table-variant="primary"
      >
        <template v-slot:cell(price)="row">{{formatPriceLocal(row.item.price)}}</template>
        <template v-slot:cell(totalPrice)="row">{{formatPriceLocal(row.item.totalPrice)}}</template>

        <template v-slot:cell(quantity)="row">
          {{row.item.quantity}}
          <b-button
            size="sm"
            @click="increment(row.item._id, row.item.selectedColor)"
            class="mr-2"
          >+</b-button>
          <b-button
            size="sm"
            @click="decrement(row.item._id, row.item.selectedColor)"
            class="mr-2"
          >-</b-button>
        </template>

        <template v-slot:cell(show_details)="row">
          <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
          >{{ row.detailsShowing ? 'Cacher' : 'Voir'}} le détail</b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Description :</b>
              </b-col>
              <b-col>{{ row.item.description }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Couleur sélectionnée :</b>
              </b-col>
              <b-col>{{ row.item.selectedColor }}</b-col>
            </b-row>
            <b-button size="sm" @click="row.toggleDetails">Cacher le détail</b-button>
          </b-card>
        </template>

        <template v-slot:cell(remove_product)="currentTeddyRow">
          <b-button
            variant="primary"
            size="sm"
            @click="removeProduct(currentTeddyRow.item._id, currentTeddyRow.item.selectedColor)"
          >
            <b-icon-trash></b-icon-trash>
          </b-button>
        </template>
      </b-table>

      <b-button variant="primary" @click="emptyBasket">Supprimer le panier</b-button>
    </b-card>
  </b-row>
</template>

<script>
import {formatPrice} from '@/functions'
export default {
name: 'OrderDetail',
data () {
  return {
    fields: [
     { 
        key: 'name',
        label: 'Nom',
        sortable: false,
      },
      { 
        key: 'selectedColor',
        label: 'selectedColor',
        sortable: false,
      },     
      { 
        key: 'quantity',
        label: 'Quantité',
        sortable: false,
        type: Number,
      },
      
      {
        key: 'price',
        label: 'Prix',
        sortable: false
      },
      {
        key: 'totalPrice',
        label: 'Total'
      },
      {
        key: 'show_details',
        label: 'Détails'
      },
      {
        key: 'remove_product',
        label: ''
      }
      
    ]    
  }
},
computed: {
  basket () {
    console.log(this.$store.getters.basket)
    return this.$store.getters.basket
  }
},
methods: {
  formatPriceLocal(price) {
    return formatPrice(price)
  },
  emptyBasket () {
    this.$store.dispatch('emptyBasket')
  },

  removeProduct(id, selectedColor){
    console.log(id)
    console.log(selectedColor)
    this.$store.dispatch('removeProduct', {id: id, selectedColor:selectedColor})
  },
  increment(id, selectedColor){
    this.$store.dispatch('incrementProduct', {id: id, selectedColor:selectedColor})
  },
  decrement(id, selectedColor) {
    this.$store.dispatch('decrementProduct', {id: id, selectedColor:selectedColor})
  }
  
}
}

</script>

<style>
</style>