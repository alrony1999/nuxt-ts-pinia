<script setup lang="ts">
import { useProductStore } from '~/stores/product'
const productStore = useProductStore();

const id= useRoute().params.id as string
onBeforeMount(async () => {
    await productStore.getProduct(id);
})

</script>

<template>
    <div>
        <NuxtLayout name="default">
            <template #secondbar>
                <h1 class="my-4">Product Details</h1>
            </template>

            <ProductDetails :product="productStore.selectedProduct" />

        </NuxtLayout>
        
    </div>
</template>