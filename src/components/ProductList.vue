<template>
    <div>
      <h1>Product List</h1>
      <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Inventory</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{product.title}}</td>
      <td>{{product.price | currency}}</td>
      <td>{{product.inventory}}</td>
      <td><button
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)"
            class='button is-info'
          >Add to cart</button></td>
    </tr> 
  </tbody>
  
</table>

    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        loading: false,
        productIndex: 1
      }
    },

    computed: {
      ...mapState({
        products: state => state.products.items
      }),

      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
      })
    },

    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
    }
  }
</script>

<style scoped>

</style>
