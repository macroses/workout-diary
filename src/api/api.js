import axios from "axios";
const url = 'http://localhost:3000'

export default class Exercises {
  static async getExercisesGroup() {
    const resolve = await axios.get(`${url}/category`)
    return resolve.data
  }

  static async getExercisesList() {
    const resolve = await axios.get(`${url}/exercises`)
    return resolve.data
  }

  static async getCurrentExercisesList(id) {
    let currentExercisesList = await Exercises.getExercisesList();
    return currentExercisesList.filter(exercise => exercise.categoryId === id)
  }
}
