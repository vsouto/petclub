import PetClubService from "@/services/PetClubService"

export const fetchProducts = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "products"

  return PetClubService.getProducts()
    .then(res => {

      commit("setProducts", res.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

export const createProduct = ({
 commit, dispatch
}, product) => {

  const fetchAttr = "products"

  console.log('creating product ', product); //eslint-disable-line
  return PetClubService.createProduct(product)
    .then(res => {

      //commit("setProducts", res.data)
      return res
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

