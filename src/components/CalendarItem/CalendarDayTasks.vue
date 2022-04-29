<template>
  <div
      class="day-tasks"
      v-for="item in checkEqualDates(day.format('D.MM.Y'))"
      :key="item.id"
      :style="{backgroundColor: 'rgba(' + item.color + ', 0.5)'}"
      @contextmenu.prevent="deleteWorkoutItem(item.id)">
    {{ item.userValue }}
  </div>
</template>

<script setup>
import { useStore } from '@/store'

const props = defineProps({
  day: Object
})

const emit = defineEmits(['deleteWorkoutItem'])
const deleteWorkoutItem = (value) => emit('deleteWorkoutItem', value)

const store = useStore()

const checkEqualDates = (date) => {
  return store.userWorkout.filter(el => {
    if (el.date === date) {
      return el.userValue
    }
  })
}
</script>

<style lang="scss" scoped>
.day-tasks {
  position: relative;
  text-align: left;
  font-size: 11px;
  padding: 2px 8px;
  color: var(--c-bg);
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 2px;
  cursor: pointer;
}
</style>