import shop from "@/api/shop";

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    cartProducts(state, getters, rootState, rootGetters) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartsate: state => {
     
      return state.items;
    }
  },

  mutations: {
    pushProductToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1
      });
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },

    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },

    emptyCart(state) {
      state.items = [];
    },
    removeItem (state,item) {
      var cartItem = state.items
      console.log(cartItem);
      cartItem.splice(cartItem.indexOf(item),1)
    }
  },

  

  actions: {
    addProductToCart(
      { state, getters, commit, rootState, rootGetters },
      product
    ) {
      if (rootGetters["products/productIsInStock"](product)) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }
        commit("products/decrementProductInventory", product, { root: true });
      }
    },
    removeItem ({commit},cartItem) {
      commit ("removeItem",cartItem)
    }
  }
};
