const mutations = {
  ifShowFooter (state, msg) {
    state.ifShowFooter = msg;
  },
  addToken (state, str) {
    state.token = str;
  },
  removeToken (state) {
    state.removeToken = '';
  }
}
export default mutations
