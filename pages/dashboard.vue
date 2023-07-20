<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

</script>

<template>
    <div>
        <NuxtLayout name="default">
            <template #secondbar>
                <h1 class="my-4">Dashboard</h1>
            </template>
         {{ authStore.user }}
        </NuxtLayout>
    </div>
</template>

<style scoped></style>

