import PetClubService from "@/services/PetClubService"

export const fetchAnimals = ({
  commit, dispatch, rootState
}) => {

  const fetchAttr = "animals"

  return PetClubService.getAnimals()
    .then(res => {

      console.log('resp is ', res); //eslint-disable-line
      commit("setAnimals", res.data)
    })
    .catch((error) => {

      console.log('error', error); //eslint-disable-line
      /*
      dispatch("error", { fetchAttr, error }, {
        root: true
      })*/
    })
}

export const createAnimal = ({
 commit, dispatch
}, animal) => {

  const fetchAttr = "animals"

  console.log('creating animal ', animal); //eslint-disable-line
  return PetClubService.createAnimal(animal)
    .then(res => {

      //commit("setAnimals", res.data)
      return res
    })
    .catch((error) => {
      console.log('error', error); //eslint-disable-line
      /*dispatch("error", { fetchAttr, error }, {
        root: true
      })*/
    })
}

