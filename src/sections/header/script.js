/**
 * Importing Libraries
 */
import { mapState } from 'vuex';

/**
 * Exporting
 */
export default {
  /*
   * Section Name
   */
  name: 'section-header',

  /*
   * Computed Properties
   */
  computed: {
    /*
     * Mapping Name of the $platform
     */
    ...mapState([
      '$platform'
    ])
  }
};
