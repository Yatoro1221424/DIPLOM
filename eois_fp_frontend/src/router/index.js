import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'list-sessions',
        component: () => import('../views/public/SessionList.vue')
      },
    ]
  },
  // {
  //   path: '/public',
  //   name: 'Public',
  //   children: [
  //     {
  //       path: 'list-sessions',
  //       component: () => import('../views/public/SessionList.vue')
  //     },
  //   ]
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'sessions',
        component: () => import('../views/admin/Sessions.vue')
      },
      {
        path: 'sessions-create',
        component: () => import('../views/admin/SessionCreate.vue')
      },
      {
        path: 'participant-entries',
        component: () => import('../views/admin/ParticipantEntries.vue')
      },
      {
        path: 'curator-entries',
        component: () => import('../views/admin/CuratorEntries.vue')
      },
      // {
      //   path: 'user-histore',
      //   component: () => import('../views/admin/UserHistore.vue')
      // },
      {
        path: 'project-entries',
        component: () => import('../views/admin/ProjectEntries.vue')
      },
      {
        path: 'firm-entries',
        component: () => import('../views/admin/FirmEntries.vue')
      }
    ]
  },
  {
    path: '/entry',
    name: 'Entry',
    component: () => import('../views/Entry.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/rating',
    name: 'Rating',
    component: () => import('../views/Rating.vue'),
    children: [
      // {
      //   path: 'ratind-user',
      //   component: () => import('')
      // },
      // {
      //   path: 'rating-firm',
      //   component: () => import('')
      // },
    ],
  },
  {
    path: '/curatorial',
    name: 'Curatorial',
    component: () => import('../views/Curatorial.vue'),
    children: [
      // {
      //   path: 'best-coworcer',
      //   component: () => import('')
      // },
      // {
      //   path: 'fine',
      //   component: () => import('')
      // },
      // {
      //   path: 'encouragement',
      //   component: () => import('')
      // },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
