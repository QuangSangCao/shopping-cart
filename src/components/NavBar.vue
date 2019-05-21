<template>
  <nav class="navbar navbar-light bg-light">
    <div class="nav-right nav-menu">
      <router-link to="/" class="nav-item is-tab" exact-active-class="is-active">Shop</router-link>

      <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="/cart" class="button is-info">
              <span class="icon">
                <i class="fa fa-shopping-cart"></i>
              </span>
              <span v-if="cartnum">Checkout ({{cartnum}})</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    cartnum() {
      console.log(this.$store.getters["cart/cartsate"]);
      const cart = this.$store.getters["cart/cartsate"];
      return cart.length;
     
    }
  }
};
</script>
