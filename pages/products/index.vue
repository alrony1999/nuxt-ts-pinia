<script setup lang="ts">
import { useProductStore } from '~/stores/product'
const productStore = useProductStore();

useHead({
    title: 'Nuxt | Products'
})

onBeforeMount(async () => {
    await productStore.getProducts();
})

</script>

<template>
    <div>
        <NuxtLayout name="default">
            <template #secondbar>
                <h1 class="my-4">Products</h1>
            </template>

            <div class="grid grid-cols-4 gap-5 px-5 py-5 shadow-md">
                <div v-for="p in productStore.products" :key="p.id">
                    <ProductCard :product="p" />
                </div>
            </div>
            
        </NuxtLayout>
    </div>
</template>

<style scoped></style>

