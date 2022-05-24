import moment from 'moment'

export const useSort = (arr, type) => {

  let sortedArray = arr

  if(type === 1) {
    sortedArray.sort((a,b) => {
      if(a.userValue < b.userValue ) {
        return 1;
      }
      if(a.userValue > b.userValue ) {
        return -1;
      }
      return 0
    })
  }

  if(type === 2) {
    sortedArray.sort((a,b) => {
      if(b.userValue < a.userValue ) {
        return 1;
      }
      if(b.userValue > a.userValue ) {
        return -1;
      }
      return 0
    })
  }

  if(type === 3) {
    sortedArray.sort((a,b) => {
      return moment(a.date, 'D.MM.YYYY') - moment(b.date, 'D.MM.YYYY');
    })
  }

  if(type === 4) {
    sortedArray.sort((a,b) => {
      return moment(b.date, 'D.MM.YYYY') - moment(a.date, 'D.MM.YYYY');
    })
  }
  console.log(type)
  return sortedArray
}