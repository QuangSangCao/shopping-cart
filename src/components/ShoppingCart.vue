<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
    	<i>Your cart is empty!</i>
    	<router-link to="/">Go shopping</router-link>
    </p>
    <table class="table is-striped" v-show="products.length">
    	<thead>
    		<tr>
    			<td>Title</td>
    			<td>Price</td>
    			<td>Quantity</td>
    		</tr>
    	</thead>
    	<tbody>
    		<tr v-for="product in products" :key="product.id">
        		<td>{{ product.title }}</td>
        		<td>${{ product.price }}</td>
        		<td>{{ product.quantity }}</td>
            <td><button class='button is-info' @click="cart(product)">Remove</button></td>
        	</tr>
        	<tr>
        		<td><b>Total:</b></td>
        		<td></td>
        		<td><b>${{ total }}</b></td>
        	</tr>
    	</tbody>

    </table>
    <p><button v-show="products.length" class='button is-primary' @click='checkout'>Checkout</button></p>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
      }),
       total () {
      return this.products.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    }
    },

    methods: {
     
      checkout(){
  		alert('Pay us $' + this.total)
    },
    ...mapActions ('cart',{
      cart : 'removeItem'
    })
    }
  }
</script>

<style scoped>

</style>
