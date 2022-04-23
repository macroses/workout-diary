<template>
  <div class="calendar-layout">

    <WeekDays/>

    <ul class="days">
      <CalendarEmptyDays/>
      <CalendarDates :days="days" @toggleModal="toggleModal"/>
    </ul>

    <Modal
        :dayData="store.currentDayForCreateWorkout"
        :isModalActive="isModalOpen"
        :isNewGroupActive="isNewGroupActive"
        @close="toggleModal">
<!--        <template #modalContent>-->
<!--          <ModalAddExercise @isNewGroup="toggleNewGroup"/>-->
<!--        </template>-->
    </Modal>
  </div>
</template>

<script setup>
import Modal from '@/components/Modal/Modal'
// import ModalAddExercise from '@/components/Modal/ModalAddExercise'
import CalendarEmptyDays from "@/components/CalendarItem/CalendarEmptyDays";
import CalendarDates from "@/components/CalendarItem/CalendarDates";
import WeekDays from "@/components/CalendarItem/WeekDays";
import { useStore } from '../store/index';
import { useDate } from "@/composables/useDate";
import { ref } from 'vue';

const days = useDate()
const store = useStore()
let isModalOpen = ref(false)
let isNewGroupActive = ref(false)

const toggleModal = (day) => {
  isModalOpen.value = !isModalOpen.value
  store.currentDayForCreateWorkout = day
  store.currentTaskColor = '11, 128, 67'
}

// const toggleNewGroup = (e) => {
//   isNewGroupActive.value = e
// }
</script>

<style lang="scss" scoped>
.calendar-layout {
  height: calc(100vh - 85px);
  flex: 1 1 auto;
}

.days {
  display: grid;
  list-style: none;
  height: 100%;
  gap: 1px;
  grid-template-columns: repeat(7, 1fr);
}
</style>