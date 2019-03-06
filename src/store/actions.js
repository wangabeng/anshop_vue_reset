export const changeifShowFooter = function ({commit}, msg) {
  commit('ifShowFooter', msg);
}
export const addToken = function ({commit}, str) {
  commit('addToken', str);
}

export const removeToken = function ({commit}) {
  commit('removeToken');
}