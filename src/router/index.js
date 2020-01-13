import VueRouter from "vue-router";
import Device from "@/views/Device.vue";
import Company from "@/views/Company.vue";
import CookBook from "@/views/CookBook.vue";
import CompanyList from "@/views/CompanyList.vue"
import CompanyNews from "@/views/CompanyNews.vue"
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/element",
  mode: "history",
  routes: [{
      path: "/device",
      name: "device",
      component: Device
    },
    {
      path: "/company",
      name: "company",
      component: Company,
      children: [{
          path: "list",
          name: "companyList",
          component: CompanyList
        },
        {
          path: "news",
          name: "news",
          component: CompanyNews
        }
      ]
    },
    {
      path: "/cookbook",
      name: "cookbook",
      component: CookBook
    }
  ]
});

export default router;