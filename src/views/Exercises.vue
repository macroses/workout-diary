<template>
  <div class="workouts">
    <div class="workouts-top">
      <Dropdown
        :selectedValue="5"
        :options="options"
        @selectOption="setSortType"/>
    </div>
    <DefaultMessage v-if="!store.userWorkout.length" />
    <WorkoutItem 
      @toggleModalTask="getTaskId"
      v-else :workouts="visibleItems"/>
    <Pagination
      v-if="store.userWorkout.length > 5"
      :pageCount="pageCount"
      @getPageCountNumber="setPageCount"
      @onPaginateClick="onPaginateClick"
    />

    <ModalTask
      @editItem="openEditModal"
      @close="isOpenTaskModal = false"
      @deleteItem="deleteWorkoutItem"
      :isOpenTaskModal="isOpenTaskModal"
      :taskId="taskId" 
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ModalTask from '@/components/ModalTask/ModalTask'
import { useSort } from '@/composables/useSort';
import { usePaginate } from '@/composables/usePaginate'
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

const taskId = ref(0)
const isOpenTaskModal = ref(false)

const setSortType = option => sortType.value = option.id

const sortedWorkouts = computed(() => useSort(store.userWorkout, sortType.value))

const [ pageCount, visibleItems, onPaginateClick, setPageCount ] = usePaginate(sortedWorkouts)

const getTaskId = (id) => {
  taskId.value = id
  isOpenTaskModal.value = true
}

</script>

<style lang="scss" scoped>
.workouts {
  flex: 1 1 auto;
}

.workouts-top {
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>