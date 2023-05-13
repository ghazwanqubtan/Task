import data from "@/data/test.json";

const state = {
  products: [],
};

const getters = {
  products: (state) => state.products,
};

const actions = {
  fetchProductsAction({ commit }) {
    commit("setProducts", data.state.products);
  },

  addProductAction({ commit }, product) {
    if (product) {
      commit("addProduct", product);
    }
  },
  
  deleteProductAction({commit}, index) {
    commit("deleteProduct", index)
  },

  updateProductAction({commit}, updatedProductPayload) {
    commit("updateProduct", updatedProductPayload)
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  // i am using unshift to show the begining of array
  addProduct: (state, product) => state.products.unshift(product),

  deleteProduct: (state, index) => state.products = state.products.filter((product, i) => i !== index),
  updateProduct: (state,updatedProductPayload) => {
    const {updatedProduct, index} = updatedProductPayload
    console.log(index, updatedProduct);

    // replace wihtout change the index(just for keep the sorting)
    state.products.splice(index, 1, updatedProduct);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
