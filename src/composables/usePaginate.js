import { computed, ref } from "vue"

export const usePaginate = (sortedArray) => {
  const perPage = ref(5)
  const currentPage = ref(1)

  const pageCount = computed(() => Math.ceil(sortedArray.value.length / perPage.value))

  const visibleItems = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = currentPage.value * perPage.value

    return sortedArray.value.slice(start, end)
  })

  const setPageCount = (option) => perPage.value = option.val

  const onPaginateClick = pageNum => currentPage.value = Number(pageNum)
  
  return [
    pageCount,
    visibleItems,
    onPaginateClick,
    setPageCount
  ]
}