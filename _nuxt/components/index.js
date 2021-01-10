export { default as Card } from '../..\\components\\Card.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Progress } from '../..\\components\\Progress.vue'
export { default as TimeLine } from '../..\\components\\TimeLine.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components_Card" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyProgress = import('../..\\components\\Progress.vue' /* webpackChunkName: "components_Progress" */).then(c => c.default || c)
export const LazyTimeLine = import('../..\\components\\TimeLine.vue' /* webpackChunkName: "components_TimeLine" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
