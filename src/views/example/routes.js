/**
 * Components
 */
const index = () => import(/* webpackChunkName: "view-example" */'./index.vue');

/**
 * Nested Routes
 */
import primary from './primary/routes';

/**
 * Exporting Routes
 */
export default {
  /*
   * Route name
   */
  name: 'view-example',

  /*
   * Route path
   */
  path: '/view-example',

  /*
   * Route component
   */
  component: index,

  /*
   * Default route redirect
   */
  redirect: {
    name: 'view-example/primary'
  },

  /*
   * Route children
   */
  children: [
    primary
  ]
};
