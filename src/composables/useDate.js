import moment from "moment";

export function useDate() {
  const dayContext = moment().lang('ru')

  const monthDate = dayContext.startOf('month')

  return [...Array(monthDate.daysInMonth())].map((_, i) => monthDate.clone().add(i, 'day'))
}

export function useDateEquality(day) {
  return moment().isSame(day, 'day')
}