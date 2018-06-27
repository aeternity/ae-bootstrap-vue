/**
 * Exporting Tags
 */
export const install = function(Vue, options) {
  /**
   * Sections List
   */
  const sections = {
    /**
     * Header
     */
    'section-header': () => import(/* webpackChunkName: "section-header" */'./header/index.vue'),
    'section-header-user': () => import(/* webpackChunkName: "section-header" */'./header/user/index.vue')
  };

  /**
   * Register Global Tags
   */
  return Object.keys(sections).forEach((id) => Vue.component(id, sections[id]));
};
