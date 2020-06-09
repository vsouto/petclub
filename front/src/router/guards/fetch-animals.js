import store from "@/store"

export const fetchAnimals = (to, from, next) => {
  store.dispatch("animal/fetchAnimals")
    .then(() => {
      next()
    })
}
