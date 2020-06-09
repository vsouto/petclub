import store from "@/store"

export const fetchProducts = (to, from, next) => {
  store.dispatch("product/fetchProducts")
    .then(() => {
      next()
    })
}
