const state = {
    loading: false
}
const mutations = {
    setloading (state, payload) {
        state.loading = payload
      }
}
export default {
    state,
    mutations
}