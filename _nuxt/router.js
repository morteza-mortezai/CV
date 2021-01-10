import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65cb5a98 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1b93cf6a = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _1b656bf2 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _265ba50e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _fdaea87e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _964c2162 = () => interopDefault(import('..\\pages\\Portfolio.vue' /* webpackChunkName: "pages/Portfolio" */))
const _4dae6194 = () => interopDefault(import('..\\pages\\Resume.vue' /* webpackChunkName: "pages/Resume" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/dist/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _65cb5a98,
    name: "about___en"
  }, {
    path: "/blog",
    component: _1b93cf6a,
    name: "blog___en"
  }, {
    path: "/contact",
    component: _1b656bf2,
    name: "contact___en"
  }, {
    path: "/es",
    component: _265ba50e,
    name: "index___es"
  }, {
    path: "/fr",
    component: _265ba50e,
    name: "index___fr"
  }, {
    path: "/inspire",
    component: _fdaea87e,
    name: "inspire___en"
  }, {
    path: "/Portfolio",
    component: _964c2162,
    name: "Portfolio___en"
  }, {
    path: "/Resume",
    component: _4dae6194,
    name: "Resume___en"
  }, {
    path: "/es/about",
    component: _65cb5a98,
    name: "about___es"
  }, {
    path: "/es/blog",
    component: _1b93cf6a,
    name: "blog___es"
  }, {
    path: "/es/contact",
    component: _1b656bf2,
    name: "contact___es"
  }, {
    path: "/es/inspire",
    component: _fdaea87e,
    name: "inspire___es"
  }, {
    path: "/es/Portfolio",
    component: _964c2162,
    name: "Portfolio___es"
  }, {
    path: "/es/Resume",
    component: _4dae6194,
    name: "Resume___es"
  }, {
    path: "/fr/about",
    component: _65cb5a98,
    name: "about___fr"
  }, {
    path: "/fr/blog",
    component: _1b93cf6a,
    name: "blog___fr"
  }, {
    path: "/fr/contact",
    component: _1b656bf2,
    name: "contact___fr"
  }, {
    path: "/fr/inspire",
    component: _fdaea87e,
    name: "inspire___fr"
  }, {
    path: "/fr/Portfolio",
    component: _964c2162,
    name: "Portfolio___fr"
  }, {
    path: "/fr/Resume",
    component: _4dae6194,
    name: "Resume___fr"
  }, {
    path: "/",
    component: _265ba50e,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
