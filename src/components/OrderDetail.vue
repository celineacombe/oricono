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
        <template v-slot:cell(show_details)="row">
          <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
          >{{ row.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>
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
              <b-col>{{ row.item.colors }}</b-col>
            </b-row>
            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template>
      </b-table>
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
        key: 'quantity',
        label: 'Quantité',
        sortable: false,
      },
      {key: 'price',
      label: 'Prix',
      sortable: false
      },
      {
        key: 'show_details',
        label: 'Détails'
      }
    ]    
  }
},
computed: {
  basket () {
    return this.$store.getters.basket
  }
},
methods: {
  formatPriceLocal(price) {
    return formatPrice(price)
  }
}
}

</script>

<style>
</style>