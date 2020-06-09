import store from "@/store"

export const isAuthorized = (to, from, next) => {
  const expiredToken = store.getters["account/expiredToken"]

  const isAuthenticated = true

  if (isAuthenticated) {
    next()
  } else {
    next({ name: "Login", query: { redirect: from.path } })
  }
}
