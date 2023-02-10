import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import HomeMove from './components/HomeMove.vue';
const routes = [
    // Page를 만들떄는 밑에만 건드리면됀다.
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/",
    component: HomeMove,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 