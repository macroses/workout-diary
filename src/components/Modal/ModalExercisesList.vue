<template>
  <ul class="exercises-list">
    <li
        v-for="(exercise, index) in currentList"
        :key="exercise.id"
        @click="selectExerciseId(exercise.id, index)"
        class="exercises-list__item"
        :class="{active: index === activeExerciseNameItem}"
    >
      {{ exercise.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  groupId: Number,
  exercisesList: Array,
  isListActive: Boolean
})

let currentList = ref([])
let activeExerciseNameItem = ref(null)

const selectExerciseId = (id, index) => {
  activeExerciseNameItem.value = index
}

watch(() => props.groupId, (value) => {
  if(value) {
    currentList.value = props.exercisesList.filter(el => el.categoryId === value)
  }
}, { immediate:true })


</script>

<style scoped lang="scss">
.exercises-list {
  width: 200px;
}

.exercises-list__item {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: var(--c-block-hover);
  }

  &.active {
    background: var(--c-accent);
    color: var(--c-bg);
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>