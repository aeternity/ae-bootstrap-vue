/**
 * Exporting Lifecycle
 * @return {Promise<T>}
 */
export default function() {
  /**
   * Check if the user is actually loggedin
   * and propagate/update the state with user details
   */
  return this.$store.dispatch('auth/session');
}
