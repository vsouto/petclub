import PetClubService from "@/services/PetClubService"

export const fetchServices = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "services"

  return PetClubService.getServices()
    .then(res => {

      commit("setServices", res.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

export const createService = ({
 commit, dispatch
}, service) => {

  const fetchAttr = "services"

  console.log('creating service ', service); //eslint-disable-line
  return PetClubService.createService(service)
    .then(res => {

      //commit("setServices", res.data)
      return res
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

