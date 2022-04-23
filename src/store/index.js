import { defineStore } from "pinia"

export const useStore = defineStore('main', {
  state: () => {
    return {
      currentDayForCreateWorkout: {},
      usersGroupName: '',
      userWorkout: [],
      currentExercise: [],
      currentTaskColor: '' || '11, 128, 67'
    }
  }
})
