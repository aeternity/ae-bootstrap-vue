/**
 * Exporting Tags
 */
export const install = function (Vue, options) {
  /**
   * Tag List
   */
  const tags = {
    /*
     * Internal components
     */
    'button': () => import(/* webpackChunkName: "tag-button" */'./button/index.vue'),
    'button-link': () => import(/* webpackChunkName: "tag-button" */'./button/link/index.vue')
  };

  /**
   * Register Global Tags
   */
  return Object.keys(tags).forEach((id) => Vue.component(id, tags[id]));
};
