<template>
  <div>
    <Nav></Nav>
    <div>
      <AddProduct/>
      <Products :products="products" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Nav from "./components/Nav.vue";
import Products from "./components/Products.vue";
import AddProduct from "./components/AddProduct.vue";

export default {
  name: "App",
  components: {
    Nav,
    Products,
    AddProduct,
  },
  methods: {
    ...mapActions(["fetchProductsAction"]),
  },
  created() {
    this.fetchProductsAction();
  },
  computed: mapGetters(["products"]),
};
</script>
