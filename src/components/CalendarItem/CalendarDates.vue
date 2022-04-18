<template>
  <li
      v-for="( day, index ) in days"
      :key="index"
      :class="{ today: useDateEquality(day) }"
      @click="toggleModal(day)">
    <span class="day-num">{{ day.format('D') }}</span>

    <CalendarDayTasks :day="day"/>
  </li>
</template>

<script setup>
import {useDateEquality} from "@/composables/useDate";
import CalendarDayTasks from "@/components/CalendarItem/CalendarDayTasks";

const props = defineProps({
  days: Array
})

const emit = defineEmits(['toggleModal'])
const toggleModal = (value) => emit('toggleModal', value)
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

</style>