import { defineStore } from 'pinia'
import { getRequest } from "~/apis/requests/useApiCall";

export const useProductStore = defineStore('product', {
  state: () => ({
    _products: [],
    _selectedProduct: {},
  }),
  getters: {
    products: (state) => state._products,
    selectedProduct: (state) => state._selectedProduct,
    
  },
  actions: {
    setSelectedProduct(product) {
      this._selectedProduct = product;
    },
    async getProducts() {
      const { response, error } = await getRequest("products",false);

      if (!error) {
        this._products = response.data;
      }
    },
    async getProduct(productId) {
      const { response, error } = await getRequest(`products/${productId}`);
      if (!error) {
        this.setSelectedProduct(response.data);
      }
    }
  }
})