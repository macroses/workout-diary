<template>
  <li
    v-for="(_, index) in store.getEmptyDays()"
    :key="index"
    class="empty"
    :style="[countCells > 35 ? moreHeight : styleHeightCalc]"
  ></li>
  <li
    v-for="( day, index ) in store.getDaysArr()"
    :key="index"
    :class="{ today: useDateEquality(day) }"
    @click="toggleModal(day)"
    :style="[countCells > 35 ? moreHeight : styleHeightCalc]"
  >
    <transition name="slide" mode="out-in">
      <span :key="day" class="day-num">{{ day.format('D') }}</span>
    </transition>
    <VueDraggableNext
      :list="store.getDaysArr"
      @change="logData"
    >
      <CalendarDayTasks
        @openTaskModal="openTaskModal"
        @deleteWorkoutItem="deleteWorkoutItem"
        :day="day"
      />
    </VueDraggableNext>
  </li>
</template>

<script setup>
import { VueDraggableNext } from "vue-draggable-next";
import {useDateEquality} from "@/composables/useDate";
import CalendarDayTasks from "@/components/CalendarItem/CalendarDayTasks";
import { useStore } from "@/store";
import {computed} from "vue";

const store = useStore()

const props = defineProps({
  days: Array,
})

const countCells = computed(() => {
  return store.getEmptyDays() + props.days.length
})

const styleHeightCalc = {
  height: 'calc((100vh / 5) - 19px'
}

const moreHeight = {
  height: 'calc((100vh / 6) - 15px'
}

const emit = defineEmits(['toggleModal', 'openTaskModal'])
const toggleModal = (value) => emit('toggleModal', value)
const deleteWorkoutItem = (value) => emit('deleteWorkoutItem', value)
const openTaskModal = (value) => {
  emit('openTaskModal', value)
}

const logData = (event) => {
  console.log(event)
}
</script>

<style lang="scss" scoped>
li {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
  padding: 3px;
  color: var(--c-text);
  transition: 0.3s;

  gap: 1px;
  display: grid;
  grid-auto-rows: min-content;

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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>