<template>
  <div class="workouts">
    <div class="workouts-top">
      <Dropdown
        v-if="store.userWorkout.length > 5"
        :options="options"
        @selectOption="setSortType"/>
    </div>
    <DefaultMessage v-if="!store.userWorkout.length" />
    <WorkoutItem v-else :workouts="visibleItems"/>
    <Pagination
      v-if="store.userWorkout.length > 5"
      :pageCount="pageCount"
      @getPageCountNumber="setPageCount"
      @onPaginateClick="onPaginateClick"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSort } from '@/composables/useSort';
import Pagination from '@/components/Pagination/Pagination'
import WorkoutItem from "@/components/WorkoutsList/WorkoutItem";
import DefaultMessage from "@/components/WorkoutsList/DefaultMessage";
import Dropdown from "@/components/UI/Dropdown";
import { useStore } from "@/store";

const store = useStore()

const options = [
  {id: 1, val: 'По алфавиту', iconName: 'arrow-up'},
  {id: 2, val: 'По алфавиту', iconName: 'arrow-down'},
  {id: 3, val: 'По дате', iconName: 'arrow-up'},
  {id: 4, val: 'По дате', iconName: 'arrow-down'},
]

const sortType = ref(null)

const setSortType = option => sortType.value = option.id

const perPage = ref(5)
const currentPage = ref(1)

const pageCount = computed(() => Math.ceil(store.userWorkout.length / perPage.value))

const visibleItems = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = currentPage.value * perPage.value

  return sortedWorkouts.value.slice(start, end)
})

const onPaginateClick = pageNum => currentPage.value = Number(pageNum)

const sortedWorkouts = computed(() => useSort(store.userWorkout, sortType.value))

const setPageCount = (option) => perPage.value = option.val
</script>

<style lang="scss" scoped>
.workouts {
  flex: 1 1 auto;
}

.workouts-top {
  padding: 16px;
}

.pagination-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-box {
  color: var(--c-text-light);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>