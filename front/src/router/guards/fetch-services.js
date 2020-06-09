import store from "@/store"

export const fetchServices = (to, from, next) => {
  store.dispatch("service/fetchServices")
    .then(() => {
      next()
    })
}
