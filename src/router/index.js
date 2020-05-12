import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/pages/Layout.vue"
import PowerView from '@/pages/power/View.vue'
import PowerZone from '@/pages/power/Zone.vue'
import PowerResourse from '@/pages/power/Resourse.vue'
import PowerRedirect from '@/pages/power/Redirect.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    component: Layout,
    children: [
      {
        path: '/views_zones',
        name: 'PowerView',
        component: PowerView,
        meta: {
          type: "views",
          child: "zones"
        }
      },
      {
        path: '/views/:viewId/zones',
        name: 'PowerZone',
        component: PowerZone,
        meta: {
          type: "zones"
        }
      },
      {
        path: '/views/:viewId/zones/:zoneId/resourses',
        name: 'PowerResourse',
        component: PowerResourse,
        meta: {
          type: "resourses"
        }
      },
      {
        path: '/views_redirects',
        name: 'PowerRedirectView',
        component: PowerView,
        meta: {
          type: "views",
          child: "redirects"
        }
      },
      {
        path: '/views/:viewId/redirects',
        name: 'PowerRedirect',
        component: PowerRedirect,
        meta: {
          type: "redirects"
        }
      },
    ]
  }]
})
