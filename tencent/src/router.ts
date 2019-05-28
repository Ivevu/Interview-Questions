import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
    },
    {
      path:'/role',
      component: ()=>import("@/pages/role.vue")
    },
    {
      path:'/leisure',
      component: ()=>import("@/pages/leisure.vue")
    },
    {
      path:'/console',
      component: ()=>import("@/pages/console.vue")
    },
    {
      path:'/chess',
      component: ()=>import("@/pages/chess.vue")
    },
    {
      path:'/action',
      component: ()=>import("@/pages/action.vue")
    },
    {
      path:'/shoot',
      component: ()=>import("@/pages/shoot.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
