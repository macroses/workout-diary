<template>
  <div class="empty-title"></div>
  <ul class="exercises-list">
    <li
        v-for="(exercise) in currentList"
        :key="exercise.id"
        @click="selectExerciseId(exercise)"
        class="exercises-list__item"
        :style="[ exercise.isSelected ? activeColorObj: '' ]"
    >
      {{ exercise.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";
import Icon from '@/components/UI/Icon'
import {useStore} from "@/store";

const store = useStore()

const props = defineProps({
  groupId: Number,
  exercisesList: Array
})

const activeColorObj = ref({
  backgroundColor: `rgb(${store.currentTaskColor})`,
  color: 'var(--c-bg)',
})

let currentList = ref([])

const selectExerciseId = (exercise) => {
  exercise.isSelected = !exercise.isSelected

  if(!store.currentExercise.includes(exercise)) {
    store.currentExercise = [...store.currentExercise ,exercise]
  }
  else {
    store.currentExercise = store.currentExercise.filter(el => el.id !== exercise.id)
  }
}

watch(() => props.groupId, (value) => {
  if(value) {
    currentList.value = props.exercisesList.filter(el => el.categoryId === value)
  }
}, { immediate:true })

watch(() => store.currentTaskColor, (value) => {
  if(value) {
    activeColorObj.value.backgroundColor = `rgb(${store.currentTaskColor})`
  }
})
</script>

<style scoped lang="scss">
.exercises-list {
  width: 200px;
  border-left: 1px solid var(--c-border);
}

.exercises-list__item {
  display: flex;
  align-items: center;
  padding: 9px 16px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  &:hover {
    background-color: var(--c-block-hover);
  }
}
</style>