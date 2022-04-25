export const useGenerateId = (arr) => {
  let lastId = 0
  if(arr) {
    lastId = arr[arr.length - 1].id
  }

  return {lastId}
}