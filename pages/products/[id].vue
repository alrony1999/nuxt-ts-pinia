<script setup lang="ts">
import { useProductStore } from '~/stores/product'
const productStore = useProductStore();

definePageMeta({
    layout: 'products'
})
const id= useRoute().params.id as string
onBeforeMount(async () => {
    await productStore.getProduct(id);
})

</script>

<template>
    <div>
        <ProductDetails :product="productStore.selectedProduct" />
    </div>
</template>