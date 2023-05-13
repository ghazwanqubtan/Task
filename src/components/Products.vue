<template>
  <div class="container">
      <h3>Product List :</h3>
     
    <ul class="d-flex flex-wrap">
      <li class="m-2" v-for="(product, index) in products" :key="index" style="min-width: 300px;">
        <div class="card container text-bg-light mb-3">
          <div class="card-header">{{product.name}}</div>
          <div class="card-body">
            <h5 class="card-title">Prices</h5>
            <p class="card-text">
              <div>
                <strong>Agent Price : {{ product.agentPrice }}</strong>
              </div>
              <div>

                <strong>Whole Sale Price : {{ product.wholeSalePrice }}</strong>
              </div>
              <div>
                <strong>Normal Price : {{ product.normalSalePrice }}</strong>
              </div>
            </p>
              <div>
                <h5 class="card-title">Branches </h5>

                <ul class="list-group">
                  <li v-for="branch in product.inventory" class="list-group-item d-flex justify-content-between align-items-center">
                    {{branch.name}}
                    <span class="badge bg-primary rounded-pill">{{ branch.quantity }}</span>
                  </li>
                </ul>
              </div>
              <div>
                total in inventory : 
                {{allQuantity(product) }}
              </div>
              <div>
              <button class="btn btn-danger" @click="deleteProduct(index)">Delete</button>
              <button class="btn btn-primary" @click="updateProduct(index)">Update</button>
              </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "ProductsComponent",
  props: {
    products: [],
  },
  computed:{
    allQuantity(){
      return (product) => {
        let totalQuantity = 0;
        for (const branch of product.inventory) {
          totalQuantity += branch.quantity;
        }
        return totalQuantity
      }
    }
   
  },
  methods: {

    ...mapActions(["deleteProductAction", "updateProductAction"]),
    deleteProduct(index) {
      if(index !== -1) {
        this.deleteProductAction(index)
      }
    },
    updateProduct(index) {
      if(index !== -1) {

        // an alternative for Modal form (just for saving time while its just a task)
        const newProductName =  prompt("Enter product name :");
        const newAgentPrice  =   parseInt(prompt("Enter agent price :"))
        const newWholeSalePrice  =  parseInt(prompt("Enter whole sale price :"))
        const newNormalPrice  =  parseInt(prompt("Enter normal price :"))
        const basraQuantity  =  parseInt(prompt("Enter basra quantity :"))
        const baghdadQuantity  =  parseInt(prompt("Enter baghdad quantity :"))
        const erbilQuantity  =  parseInt(prompt("Enter erbil quantity :"))

       const updatedProduct = {
        
            name: newProductName,
            agentPrice:newAgentPrice,
            wholeSalePrice:newWholeSalePrice,
            normalSalePrice:newNormalPrice,
            inventory: [
                {
                    name:"Basra",
                    quantity: basraQuantity
                },
                {
                    name:"Baghdad",
                    quantity: baghdadQuantity
                },
                {
                    name:"Erbil",
                    quantity: erbilQuantity
                }

            ]
        

       }
        this.updateProductAction({updatedProduct, index})
      }
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}

li {
  text-align: center;
}
</style>
