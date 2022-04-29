<template>
  <div class="calendar-layout">
    <WeekDays/>
    <ul class="days">
      <CalendarEmptyDays/>
      <CalendarDates 
        :days="days" 
        @toggleModal="toggleModal"
        @deleteWorkoutItem="deleteWorkoutItem"
        />
    </ul>
    <Modal
      :dayData="store.currentDayForCreateWorkout"
      :isModalActive="isModalOpen"
      :isNewGroupActive="isNewGroupActive"
      @close="toggleModal" 
    />
    <ModalConfirm 
      @dropBoolean="getConfirmBoolean"
      :isConfirm="isConfirm"
      :title="`Удалить тренировку ${eventName.userValue}?`">
    </ModalConfirm>
  </div>
</template>

<script setup>
import Modal from '@/components/Modal/Modal'
import ModalConfirm from '@/components/Modal/Confirm/ModalConfirm'
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
const isConfirm = ref(false)
const confirmId = ref(0)
const eventName = ref('')

const answerFromConfirm = ref(null)

const toggleModal = (day) => {
  isModalOpen.value = !isModalOpen.value
  store.currentDayForCreateWorkout = day
  store.currentTaskColor = '11, 128, 67'
  store.clearExercise()
}

const getConfirmBoolean = (bool) => {
  if(bool) {
    store.userWorkout = store.userWorkout.filter(el => el.id !== confirmId.value);
  }
  isConfirm.value = false
}

const deleteWorkoutItem = (id) => {
  isConfirm.value = true
  confirmId.value = id
  eventName.value = store.userWorkout.find(el => el.id === confirmId.value)
}
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