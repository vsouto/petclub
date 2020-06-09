import * as mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"

const state = {
  storeModuleDirectory: "product",
  products: []
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
