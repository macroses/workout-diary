<template>
  <div
      class="day-of-workout__desc">
    Дата тренировки:
    <span>
      {{ dayData}}
    </span>
    <span
        @click="resetExerciseStore"
        class="clear-all">Сбросить все</span>
  </div>
</template>

<script setup>
import { useStore } from "@/store";

const props = defineProps({
  dayData: String
})

const store = useStore()
const resetExerciseStore = () => store.clearExercise()
</script>

<style lang="scss" scoped>
.day-of-workout__desc {
  font-size: 12px;
  padding: 8px 16px;
  color: var(--c-text-light);
  display: flex;
  span {
    margin-left: 8px;
    color: var(--c-accent);
    font-weight: 600;
  }

  &.today {
    span {
      background: var(--c-accent);
      color: var(--c-bg);
      padding: 0 5px;
      border-radius: 4px;
    }
  }

  .clear-all {
    display: block;
    margin-left: auto;
    font-weight: 600;
    color: var(--c-accent);
    cursor: pointer;
  }
}


</style>