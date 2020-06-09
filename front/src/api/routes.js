const apiPath = process.env.VUE_APP_API_HOSTNAME

// Users
const userBasePath = apiPath + "/user"
export const USERS = {
  USERS: userBasePath,
  USER: (id) => `${userBasePath}/${id}`,
}

// Products
const productBasePath = apiPath + "/product"
export const PRODUCTS = {
  PRODUCTS: productBasePath,
  PRODUCT: (id) => `${productBasePath}/${id}`,
}

// Services
const serviceBasePath = apiPath + "/service"
export const SERVICES = {
  SERVICES: serviceBasePath,
  SERVICE: (id) => `${serviceBasePath}/${id}`,
}

// Clients
const clientBasePath = apiPath + "/client"
export const CLIENTS = {
  CLIENTS: clientBasePath,
  CLIENT: (id) => `${clientBasePath}/${id}`,
}

// Animals
const animalBasePath = apiPath + "/animal"
export const ANIMALS = {
  ANIMALS: animalBasePath,
  ANIMAL: (id) => `${animalBasePath}/${id}`,
}

