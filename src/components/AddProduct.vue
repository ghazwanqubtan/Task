<template>
  <div class="container">
    <h3>Add new Product :</h3>

    <form @submit="handleSubmit">
      <input type="text" placeholder="Product name" v-model="name" />
      <input type="number" placeholder="Agent Price" v-model="agentPrice" />
      <input type="number" placeholder="Whole Sale Price" v-model="wholeSalePrice" />
      <input type="number" placeholder="Normal Price" v-model="normalSalePrice"/>
      <br />
      <input type="number" placeholder="Basra quantity" v-model="basraQuantity" />
      <input type="number" placeholder="Baghdad quantity" v-model="baghdadQuantity" />
      <input type="number" placeholder="Erbil quantity" v-model="erbilQuantity" />
      <input type="submit" value="Add" class="btn btn-primary" />
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "AddProduct",
  data: () => {
    return {
        name: '',
        agentPrice: Number,
        wholeSalePrice: Number,
        normalSalePrice: Number,
        basraQuantity:Number,
        baghdadQuantity:Number,
        erbilQuantity:Number
    }
  },
  methods:{
    ...mapActions(["addProductAction"]),
    handleSubmit(e) {
        e.preventDefault()
        // create new product
        
        const newProduct = {
            name: this.name,
            agentPrice:this.agentPrice,
            wholeSalePrice:this.wholeSalePrice,
            normalSalePrice:this.normalSalePrice,
            inventory: [
                {
                    name:"Basra",
                    quantity: this.basraQuantity
                },
                {
                    name:"Baghdad",
                    quantity: this.baghdadQuantity
                },
                {
                    name:"Erbil",
                    quantity: this.erbilQuantity
                }

            ]
        }

        this.addProductAction(newProduct)
    }

  },
  
};
</script>
