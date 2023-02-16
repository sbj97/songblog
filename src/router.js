import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import HomeMove from './components/HomeMove.vue';
import DetailList from './components/DetailList.vue';
import SbsAuthor from './components/SbsAuthor.vue';
import SbsComment from './components/SbsComment.vue';
const routes = [
  
    // Page를 만들떄는 밑에만 건드리면됀다.
  {
    path: "/detail/:id(\\d+)",
    component: DetailList,    
    children: [
      {
      path: "author",
      component: SbsAuthor,
      },
      {
        path: " comment",
        component: SbsComment,
      },   
    ]
  },
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/",
    component: HomeMove,
  },
  {
    path: "/:anything(.*)",
    component: HomeMove,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 