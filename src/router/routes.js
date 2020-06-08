import Layout from '../pages/Layout.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/home/homePartial.vue')
      },
      {
        path: '/homeDetails/:movieID',
        name: 'Home Details',
        component: () => import('../pages/home/homeDetailsPartial.vue'),
        children: [
          {
            path: '/episodes',
            name: 'Episodes',
            component: () => import('../pages/home/episodesPartial.vue')
          },
          {
            path: '/trailers',
            name: 'Trailers',
            component: () => import('../pages/home/trailersPartial.vue')
          },
          {
            path: '/moreLikeThis',
            name: 'More Like This',
            component: () => import('../pages/home/morelikethisPartial.vue')
          }
        ]
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('../pages/searchPartial.vue')
      },
      {
        path: '/comingSoon',
        name: 'Coming Soon',
        component: () => import('../pages/comingSoonPartial.vue')
      },
      {
        path: '/downloads',
        name: 'Downloads',
        component: () => import('../pages/downloadsPartial.vue')
      },
      {
        path: '/more',
        name: 'More',
        component: () => import('../pages/morePartial.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
