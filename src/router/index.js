import VueRouter from "vue-router";
import Device from "../components/Device.vue";
import Company from "../components/Company.vue";
import CookBook from "../components/CookBook.vue";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/element",
  mode: "history",
  routes: [
    {
      path: "/device",
      name: "device",
      component: Device
    },
    {
      path: "/company",
      name: "company",
      component: Company
    },
    {
      path: "/cookbook",
      name: "cookbook",
      component: CookBook
    }
  ]
});

export default router;
