import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import GalleryView from '@/views/GalleryView.vue';
import AboutUsView from '@/views/AboutUsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      { path: 'gettingstarted', component: () => import('@/components/GettingStarted.vue') },
      { path: 'gallery', component: () => import('@/components/Gallery.vue') },
      { path: 'aboutus', component: () => import('@/components/AboutUs.vue') },
    ],
  },
  { path: '/gallery', component: GalleryView },
  { path: '/aboutus', component: AboutUsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
