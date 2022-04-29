import { defineStore } from "pinia"

export const useStore = defineStore('main', {
  state: () => ({
    currentDayForCreateWorkout: {},
    usersGroupName: '',
    userWorkout: [],
    currentExercise: [],
    currentTaskColor: '' || '11, 128, 67'
  }),
  actions: {
    clearExercise() {
      this.currentExercise = []
    },
    userWorkoutPush(id, userValue, color, date, exercise) {
      this.userWorkout.push({
        id: id + 1,
        userValue,
        color,
        date,
        exercises: exercise,
      })
    }
  }
})
