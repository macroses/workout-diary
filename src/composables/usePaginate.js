import { computed, ref } from "vue"

export function usePaginate (sortedArray) {
  const perPage = ref(5)
  const currentPage = ref(1)

  const pageCount = computed(() => Math.ceil(sortedArray.length / perPage.value))

  const visibleItems = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = currentPage.value * perPage.value

    return sortedArray.slice(start, end)
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