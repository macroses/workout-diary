<template>
  <div
      class="day-tasks"
      v-for="item in checkEqualDates(day.format('D.MM.Y'))"
      :key="item.id"
      @contextmenu.prevent="deleteWorkoutItem(item.id,)">
    {{ item.userValue }}
  </div>
</template>

<script setup>
import { useStore } from '@/store'

const props = defineProps({day: Object})

const store = useStore()

const checkEqualDates = (date) => {
  return store.userWorkoutName.filter(el => {
    if (el.date === date) {
      return el.userValue
    }
  })
}

const deleteWorkoutItem = (id) => {
  const name = store.userWorkoutName.find(el => el.id === id)

  if(confirm(`Удалить тренировку ${name.userValue}`)) {
    store.userWorkoutName = store.userWorkoutName.filter(el => el.id !== id);
  }
}
</script>

<style lang="scss" scoped>
.day-tasks {
  position: relative;
  text-align: left;
  font-size: 11px;
  padding: 2px 8px;
  background: var(--c-accent);
  color: var(--c-bg);
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 2px;
  cursor: pointer;
}
</style>