import http from "@/api"
import { USERS, PRODUCTS, SERVICES, CLIENTS, ANIMALS } from "@/api/routes"

export default {
  /**
   * USERS
   */
  getUsers() {
    return http.get(USERS.USERS)
  },
  getUser(id) {
    return http.get(USERS.USER(id))
  },
  createUser(user) {
    return http.post(USERS.USERS, user.dump())
  },

  /**
   * CLIENTS
   */
  getClients() {
    return http.get(CLIENTS.CLIENTS)
  },
  getClient(id) {
    return http.get(CLIENTS.CLIENT(id))
  },
  createClient(client) {
    return http.post(CLIENTS.CLIENTS, client.dump())
  },

  /**
   * ANIMALS
   */
  getAnimals() {
    return http.get(ANIMALS.ANIMALS)
  },
  getAnimal(id) {
    return http.get(ANIMALS.ANIMAL(id))
  },
  createAnimal(animal) {
    return http.post(ANIMALS.ANIMALS, animal.dump())
  },

  /**
   * PRODUCTS
   */
  getProducts() {
    return http.get(PRODUCTS.PRODUCTS)
  },
  getProduct(id) {
    return http.get(PRODUCTS.PRODUCT(id))
  },
  createProduct(product) {
    return http.post(PRODUCTS.PRODUCTS, product.dump())
  },

  /**
   * SERVICES
   */
  getServices() {
    return http.get(SERVICES.SERVICES)
  },
}
