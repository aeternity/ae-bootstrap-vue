/**
 * Components
 */
const index = () => import(/* webpackChunkName: "view-example/primary" */'./index.vue');

/**
 * Sections
 */
import header from '@/sections/header/index.vue';


/**
 * Exporting Routes
 */
export default {
  /*
   * Route name
   */
  name: 'view-example/primary',

  /*
   * Route path
   */
  path: 'primary',

  /*
   * Route component
   */
  components: {
    'default': index,
    'header': header
  }
};
