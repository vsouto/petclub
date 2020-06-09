import PetClubService from "@/services/PetClubService"

export const fetchUsers = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "users"

  return PetClubService.getUsers()
    .then(res => {

      commit("setUsers", res.data)
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

export const createUser = ({
 commit, dispatch
}, user) => {

  const fetchAttr = "users"

  console.log('creating user ', user); //eslint-disable-line
  return PetClubService.createUser(user)
    .then(res => {

      //commit("setUsers", res.data)
      return res
    })
    .catch((error) => {
      dispatch("error", { fetchAttr, error }, {
        root: true
      })
    })
}

