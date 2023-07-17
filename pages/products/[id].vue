<template>
    <div>
        <ProductDetails :product="productStore.selectedProduct" />
    </div>
</template>

<script setup>
import { useProductStore } from '~/stores/product'
const productStore = useProductStore();

definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params
onBeforeMount(async () => {
    await productStore.getProduct(id);
})

</script>

<style scoped></style>