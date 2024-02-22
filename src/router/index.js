
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import DashboardPage from '@/views/DashboardPage.vue';
import ListingPage from '@/views/ListingPage.vue';
import PageNotFound from '@/views/PageNotFound.vue';

const CONTEXT_PATH =  process.env.VUE_APP_CONTEXT_PATH
console.log(CONTEXT_PATH)
const routes = [
  { path: '/', component: HomePage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/listing', component: ListingPage },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(CONTEXT_PATH),
  routes
})
export default router