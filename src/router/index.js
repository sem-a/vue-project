import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import SearchResults from '../views/SearchResults.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/search/:tag',
    name: 'SearchResults',
    component: SearchResults,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
