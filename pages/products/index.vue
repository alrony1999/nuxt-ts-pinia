<script setup>
import { useProductStore } from '~/stores/product'
const productStore = useProductStore();

definePageMeta({
    layout: 'products'
})

useHead({
    title: 'Nuxt | Products'
})

onBeforeMount(async () => {
    await productStore.getProducts();
})

</script>
<template>
    <div>
        <h1 class="my-4">Products</h1>
        <hr>
        <div class="grid grid-cols-4 gap-5 mt-3">
            <div v-for="p in productStore.products" :key="p.id">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>



<style scoped></style>