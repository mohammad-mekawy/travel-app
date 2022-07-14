import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destinations/:id/:slug",
    name: "destinations.show",
    component: () => import("@/views/DestinationsDetails.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    // children: [
    //   {
    //     path: "experiences/:Exslug",
    //     name: "ExperiensDetails",
    //     component: () => import("@/views/ExperiensDetails.vue"),
    //     props: (route) => ({ ...route.params,id: parseInt(route.params.id) }),
    //   },
    // ],
    beforeEnter(to, from) {
      console.log(sourceData.destinations);
      console.log(typeof sourceData.destinations);
      const Idexists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      const Slugexists = sourceData.destinations.find(
        (destination) => destination.slug == to.params.slug
      );
      if (!Idexists || !Slugexists)
        return {
          name: "NotFound",
          // allows keeping the URL while rendering a different page
          params: { catchAll: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
  },
  {
    path: "/destinations/:id/:slug/experiences/:Exslug",
    name: "ExperiensDetails",
    component: () => import("@/views/ExperiensDetails.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

export default router;
