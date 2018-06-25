/**
 * Global Imports
 */
import '@/directives';
import '@/filters';

/**
 * Application
 */
import Vue from 'vue';

/**
 * Vue Application Root
 */
import app from '@/index.vue';

/**
 * Vue Application State
 */
import store from '@/store';

/**
 * Vue Application Lifecycle
 */
import beforeCreate from '@/lifecycle/beforecreate';

/**
 * Vue Application Router
 */
import { router } from '@/index';

/**
 * Vue Application custom Tags
 */
import * as tags from '@/tags';

/**
 * Vue Application custom Tags
 */
import * as sections from '@/sections';

/**
 * Import Tag
 */
Vue.use(tags);

/**
 * Import Units
 */
Vue.use(sections);

/**
 * Subscribes to the store
 */
store.subscribe((mutation) => {});

/**
 * New Vue Instance
 */
export default new Vue({
  /**
   * Plugins
   */
  store,
  router,

  /**
   * Lifecycle
   */
  beforeCreate,

  /**
   * Rendering Application
   * @param h
   * @return {*}
   */
  render: (h) => h(app)
}).$mount('#app');
