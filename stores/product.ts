import { defineStore } from 'pinia'
import { getRequest } from "~/apis/requests/useApiCall";
import { Product } from "~/types";

export const useProductStore = defineStore('product', {
  state: () => ({
    _products: [] as Product[],
    _selectedProduct: {} as Product,
  }),
  getters: {
    products: (state) => state._products,
    selectedProduct: (state) => state._selectedProduct,

  },
  actions: {
    setSelectedProduct(product: Product) {
      this._selectedProduct = product;
    },
    async getProducts() {
      const { response, error } = await getRequest<Product[]>("products", false);

      if (!error) {
        this._products = response.data;
      }
    },
    async getProduct(productId: string) {
      const { response, error } = await getRequest<Product>(`products/${productId}`);
      if (!error) {
        this.setSelectedProduct(response.data);
      }
    }
  }
})