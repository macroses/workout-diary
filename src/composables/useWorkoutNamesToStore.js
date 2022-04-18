import { useStore } from "@/store";

export function useWorkoutNamesToStore(value, date, workoutNameValue) {
  const store = useStore()

  if(!workoutNameValue) return

  let lastId = 0

  if(store.userWorkoutName.length) {
    lastId = store.userWorkoutName[store.userWorkoutName.length - 1].id
  }

  store.userWorkoutName.push({
    id: lastId + 1,
    userValue: value,
    date: date,
  })
  workoutNameValue = ''

  close()

  return {

  }
}