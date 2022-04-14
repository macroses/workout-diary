import { defineStore } from "pinia"

export const useStore = defineStore('main', {
  state: () => {
    return {
      currentDayForCreateWorkout: {}
    }
  }
})

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     exercises: []
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
