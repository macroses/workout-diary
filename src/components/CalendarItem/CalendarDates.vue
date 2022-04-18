<template>
  <li
      v-for="( day, index ) in days"
      :key="index"
      :class="{ today: useDateEquality(day) }"
      @click="toggleModal(day)">
    <span class="day-num">{{ day.format('D') }}</span>

    <div
        class="day-tasks"
        v-for="item in checkEqualDates(day.format('D.MM.Y'))"
        :key="item.id">
      {{ item.userValue }}
    </div>
  </li>
</template>

<script setup>
import {useStore} from '@/store'
import {useDateEquality} from "@/composables/useDate";

const store = useStore()
const props = defineProps({
  days: Array
})

const emit = defineEmits(['toggleModal'])
const toggleModal = (value) => emit('toggleModal', value)

const checkEqualDates = (date) => {
  return store.userWorkoutName.filter(el => {
    if (el.date === date) {
      return el.userValue
    }
  })
}
</script>

<style lang="scss" scoped>
li {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
  padding: 3px;

  gap: 1px;
  display: grid;
  grid-auto-rows: min-content;
  height: calc((100vh / 5) - 18px);
  width: calc((100vw / 7) - 1px);

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