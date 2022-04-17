<template>
  <li
      v-for="( day, index ) in days"
      :key="index"
      :class="{ today: useDateEquality(day) }"
      @click="toggleModal(day)">
    <span class="day-num">{{ day.format('D') }}</span>

    <div class="day-tasks">
      {{ checkEqualDates(day.format('D.MM.Y')) }}
    </div>
  </li>
</template>

<script setup>
import { useStore } from '@/store'
import { useDateEquality } from "@/composables/useDate";

const store = useStore()
const props = defineProps({
  days: Array
})

const emit = defineEmits(['toggleModal'])
const toggleModal = (value) => emit('toggleModal', value)

const checkEqualDates = (date) => {
  if(store.userWorkoutName.date === date) {
    return store.userWorkoutName.userValue
  }
  return ''
}
</script>

<style lang="scss" scoped>
li {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;

  &:nth-child(7n) {
    border-right: none;
  }
}

.day-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 23px;
  width: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.today {
  .day-num {
    color: #fff;
    background: var(--c-accent);
  }
}

.day-tasks {
  text-align: left;
  font-size: 12px;
  padding: 0 8px;
  background: var(--c-accent);
  color: var(--c-bg)
}
</style>