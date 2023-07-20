import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from',from);
  console.log('to',to);

  // if (!isAuthenticated.value && to.path !== '/') {
  //   return navigateTo('/');
  // } else if (isAuthenticated.value === true && to.path === '/') {
  //   return navigateTo('/dashboard');
  // }
})