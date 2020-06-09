import store from "@/store"

export const fetchClients = (to, from, next) => {
  store.dispatch("client/fetchClients")
    .then(() => {
      next()
    })
}
