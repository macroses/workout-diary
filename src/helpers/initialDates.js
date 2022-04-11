import moment from "moment"

export function initialDates() {
  const today = moment()
  const initialDate = today.get('date')
  const initialMonth = today.format('MMMM')
  const initialYear = today.format('YYYY')

  return {
    today,
    initialDate,
    initialMonth,
    initialYear
  }
}