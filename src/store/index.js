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

    deleteSetItem(value) {
      this.currentExercise.forEach(exercise => {
        exercise.sets = exercise.sets.filter(set => set.id !== value.id)
      })
    },

    selectExerciseId(exercise) {
      exercise.isSelected = !exercise.isSelected

      if(!this.currentExercise.includes(exercise)) {
        this.currentExercise = [...this.currentExercise, exercise]
      }
      else {
        this.currentExercise = this.currentExercise.filter(el => el.id !== exercise.id)
      }
    },

    storeSet(item, lastId, weight, repeats, sets) {
      if(!repeats) return

      this.currentExercise.forEach(exercise => {
        if(exercise.id === item.id) {
          exercise.sets = [
            ...exercise.sets,
            {
              id: lastId++,
              weight: weight,
              repeats: repeats,
              setType: sets
            }
          ]
        }
      })
      item.isSettingsActive = false
    },

    workoutNameToStore(workoutName, date) {
      if(!workoutName) return
      let lastId = 0

      if(this.userWorkout.length) {
        lastId = this.userWorkout[this.userWorkout.length - 1].id
      }

      this.userWorkout.push({
        id: lastId + 1,
        userValue: workoutName,
        color: this.currentTaskColor,
        date: date,
        exercises: this.currentExercise,
      })

      this.currentExercise = []
      this.currentTaskColor = '11, 128, 67'
    }
  }
})
