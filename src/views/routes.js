/**
 * Components
 */
import index from './index.vue';

/**
 * Nested Routes
 */
import example from './example/routes';

/**
 * Exporting Routes
 */
export default [
  /*
   * App route
   */
  {
    /*
     * Route name
     */
    name: 'home',

    /*
     * Route path
     */
    path: '/',

    /*
     * Route metadata
     */
    meta: { requiresAuth: true },

    /*
     * Route component
     */
    component: index,

    /*
     * Route redirect
     */
    redirect: {
      name: 'view-example/primary'
    },

    /*
     * Route children
     */
    children: []
  },

  /*
   * Auth route
   */
  example
];
