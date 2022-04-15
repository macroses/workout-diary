import axios from "axios";
const url = 'http://localhost:3000'

export default class Exercises {
  static async getExercisesGroup() {
    const resolve = await axios.get(`${url}/category`)
    return resolve.data
  }
}
