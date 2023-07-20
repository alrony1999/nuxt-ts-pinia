<template>
    <div class="min-h-screen bg-gray-100">
        <div class="h-16 bg-white shadow-sm pl-80 pr-8 fixed w-full top-0 left-0 flex items-center">
            <slot name="secondbar" />
            <!-- <div class="relative">
                <svg class="absolute left-2 top-2 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <input type="text"
                    class="block w-72 shadow border-none rounded-3xl focus:outline-none py-2 bg-gray-100 text-base text-gray-600 pl-11 pr-2">
            </div> -->
            <div class="ml-auto flex items-center">
                <svg class="w-6 cursor-pointer text-gray-600 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>

                <div class="ml-4 relative">
                    <div @click="handleClick" class="cursor-pointer">
                        <img class="h-8 w-8 rounded-full object-cover"
                            :src="`https://ui-avatars.com/api/?name=${authStore.user.name}`" alt="">
                    </div>
                    <div v-if="show" class="absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white">
                        <div class="px-4 py-2 text-xs text-gray-400">Manage Account</div>
                        <NuxtLink href=""
                            class="block px-4 py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Profile
                        </NuxtLink>
                        <div class="border-t border-gray-100"></div>
                        <NuxtLink @click.prevent="signOut()" href=""
                            class=" block px-4 py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Logout
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </div>

        <div class="fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-md z-10">
            <div class="text-white font-bold text-base uppercase text-center py-5 bg-gray-900">Nuxt 3</div>
            <div class="py-5">
                <NuxtLink to="/"
                    class="flex items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 mr-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    Dashboard
                </NuxtLink>
                <NuxtLink to="/products"
                    class="flex items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 mr-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                    </svg>
                    Products
                </NuxtLink>
            </div>
        </div>

        <div class="pt-[30px] pl-[145px] w-full min-h-[500px]">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const show = ref(false);

const handleClick = () => {
    show.value = !show.value
}

const signOut = async () => {
    const response = await authStore.logout();
    if (response != null) {
        authStore.$reset();
        useRouter().push("/");
    }
}

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>