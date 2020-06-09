import store from "@/store"

export const fetchUsers = (to, from, next) => {
  store.dispatch("user/fetchUsers")
    .then(() => {
      next()
    })
}
