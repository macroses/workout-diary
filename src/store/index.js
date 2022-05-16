import { defineStore } from "pinia"
import moment from "moment";
import {useUniqueId} from "@/composables/useUniqueId";

moment.locale('ru')

export const useStore = defineStore('main', {
  state: () => ({
    initialDate: moment(),
    currentDayForCreateWorkout: {},
    usersGroupName: '',
    userWorkout: [],
    currentExercise: [],
    currentTaskColor: '' || '11, 128, 67',
    isEditModal: false,
    taskEditId: null
  }),
  actions: {
    clearExercise(array) {
      this.currentExercise = []
      if(array) array = []
    },

    readExerciseById(id) {
      return this.userWorkout.filter(el => el.id === id)[0]
    },

    deleteSetItem(value) {
      this.currentExercise.forEach(exercise => {
        exercise.sets = exercise.sets.filter(set => set.id !== value.id)
      })
    },

    copySetItem(value) {
      let {id, repeats, setType, weight} = value

      this.currentExercise.forEach(exercise => {
        exercise.sets.forEach(set => {

          if(set.id === id) {
            exercise.sets = [...exercise.sets, {
              id: useUniqueId(),
              repeats,
              setType,
              weight
            }]
          }
        })
      })
    },

    selectExerciseId(exercise) {
      if (exercise.isSelected && this.isEditModal) {
        exercise.isSelected = !exercise.isSelected
        this.currentExercise = this.currentExercise.filter(el => el.id !== exercise.id)
        return
      }

      exercise.isSelected = !exercise.isSelected

      if(this.currentExercise.includes(exercise)) {
        this.currentExercise = this.currentExercise.filter(el => el.name !== exercise.name)
      }
      else {
        this.currentExercise = [...this.currentExercise, exercise]
      }
    },

    storeSet(item, weight, repeats, sets) {

      if(!repeats) return

      this.currentExercise.forEach(exercise => {
        if(exercise.id === item.id) {
          exercise.sets.push(
            {
              id: useUniqueId(),
              weight,
              repeats,
              setType: sets || ''
            }
          )
        }
      })

      item.isSettingsActive = false
    },

    workoutNameToStore(workoutName, date) {
      if (!workoutName) return

      this.userWorkout = [...this.userWorkout, {
        id: useUniqueId(),
        userValue: workoutName,
        color: this.currentTaskColor,
        date,
        exercises: this.currentExercise,
      }]

      this.currentTaskColor = '11, 128, 67'
    },

    resetCurrentDate() {
      this.initialDate = moment()
    },

    getDaysArr() {
      const dayContext = this.initialDate
      const monthDate = dayContext.startOf('month')
      return [...Array(monthDate.daysInMonth())].map((_, i) => monthDate.clone().add(i, 'day'))
    },

    getEmptyDays() {
      const dayContext = this.initialDate
      const currentDate = dayContext.get('date')

      let emptyDaysCount = moment(dayContext).subtract((currentDate), 'days').weekday() + 1

      if(emptyDaysCount === 7) emptyDaysCount = 0

      return emptyDaysCount
    }
  }
})
