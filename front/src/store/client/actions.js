import PetClubService from "@/services/PetClubService"

export const fetchClients = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "clients"

  return PetClubService.getClients()
    .then(res => {

      console.log('resp is ', res); //eslint-disable-line
      commit("setClients", res.data)
    })
    .catch((error) => {

      console.log('error', error); //eslint-disable-line
      /*
      dispatch("error", { fetchAttr, error }, {
        root: true
      })*/
    })
}

export const createClient = ({
 commit, dispatch
}, client) => {

  const fetchAttr = "clients"

  console.log('creating client ', client); //eslint-disable-line
  return PetClubService.createClient(client)
    .then(res => {

      //commit("setClients", res.data)
      return res
    })
    .catch((error) => {
      console.log('error', error); //eslint-disable-line
      /*dispatch("error", { fetchAttr, error }, {
        root: true
      })*/
    })
}

