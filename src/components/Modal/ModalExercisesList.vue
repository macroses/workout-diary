<template>
  <div class="empty-title"></div>
  <ul class="exercises-list">
    <li
        v-for="(exercise) in currentValue"
        :key="exercise.id"
        @click="selectExerciseId(exercise)"
        class="exercises-list__item"
        :style="[ exercise.isSelected ? activeColorObj : '' ]"
    >
      {{ exercise.name }}
      <Icon :iconName="exercise.isSelected ? 'minus' : 'plus'"/>
    </li>
  </ul>
</template>

<script setup>
import {computed, onBeforeMount, onBeforeUpdate, onUpdated, ref, watch} from "vue"
import {useStore} from "@/store"
import Icon from "@/components/UI/Icon.vue"

const store = useStore()

const props = defineProps({
  groupId: Number,
  exercisesList: Array
})

const computedColor = computed(() => `rgb(${store.currentTaskColor})`)

const currentValue = computed(() => {
  return props.exercisesList.filter(el => el.categoryId === props.groupId)
})

watch(() => store.currentExercise, (value) => {
  if(!value.length) {
    currentValue.value.forEach(element => {
      element.isSelected = false
      element.sets = []
    })
  }
})

onBeforeUpdate(() => {
  if(store.isEditModal) {
    store.currentExercise.forEach(el => {
      props.exercisesList.forEach(propEl => {
        if(el.id === propEl.id) {
          propEl.isSelected = true
        }
      })
    })
  }
})


const activeColorObj = ref({
  borderRightColor: computedColor
})

const selectExerciseId = exercise => {
  if(exercise.isSelected && store.isEditModal) {
    exercise.isSelected = !exercise.isSelected
    store.currentExercise = store.currentExercise.filter(el => el.id !== exercise.id)
    return
  }

  store.selectExerciseId(exercise)
}
</script>

<style scoped lang="scss">
.exercises-list {
  width: 250px;
  border-left: 1px solid var(--c-border);
}

.exercises-list__item {
  display: flex;
  align-items: center;
  padding: 9px 16px;
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  height: 34px;
  border-right: 6px solid transparent;
  color: var(--c-text);

  &:hover {
    background-color: var(--c-block-hover);
  }
}

svg {
  margin-left: auto;
  width: 16px;
  fill: var(--c-text-light)
}
</style>