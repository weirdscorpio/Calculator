export default {
  addToResult: ({ commit }, x) => {
    commit('addToResult', x)
  },
  erase: ({ commit }) => {
    commit('erase')
  },
  prefixSign: ({ commit }) => {
    commit('prefixSign')
  },
  percentage: ({ commit }) => {
    commit('percentage')
  },
  addSign: ({ commit }, x) => {
    commit('addSign', x)
  },
  calculate: ({ commit }) => {
    commit('calculate')
  }
}
