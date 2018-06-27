/**
 * Vue
 */
import Vue from 'vue';
import AeppComponents from '@aeternity/aepp-components';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

/**
 * Store
 */
import store from '@/store';

/**
 * Routes
 */
import routes from '@/views/routes';

/**
 * Installing Vue Plugins
 */
Vue.use(AeppComponents);
Vue.use(VueRouter);

/**
 * Instantiating Vue Router
 */
const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'exact-active',
  linkActiveClass: 'active',
  routes
});

/**
 * Vuex / Router Sync
 */
sync(store, router);

/**
 * Vue Router Hooks
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.auth.loggedIn) {
      return next({
        name: 'auth',
        query: { redirect: to.fullPath }
      });
    }
    return next();
  }
  return next();
});

/**
 * Exporting Router Instance
 */
export { router };

/**
 * Exporting Application Instance
 */
export default {
  name: 'app'
};
