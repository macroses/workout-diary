<template>
  <div class="calendar-layout">
    <WeekDays/>
    <ul ref="countCells" class="days">
      <CalendarDates 
        :days="days" 
        @toggleModal="toggleModal"
        @deleteWorkoutItem="deleteWorkoutItem"
        @openTaskModal="openTaskModal" />
    </ul>
    <Modal
      :dayData="store.currentDayForCreateWorkout"
      :isModalActive="isModalOpen"
      :isNewGroupActive="isNewGroupActive"
      :userValue="userWorkoutName"
      @close="toggleModal" />
    <ModalConfirm 
      @dropBoolean="getConfirmBoolean"
      :isConfirm="isConfirm"
      :title="`Удалить тренировку ${eventName.userValue}?`" />
    <ModalTask
      @editItem="openEditModal"
      @close="isOpenTaskModal = false"
      @deleteItem="deleteWorkoutItem"
      :isOpenTaskModal="isOpenTaskModal"
      :taskId="taskId" />
  </div>
</template>

<script setup>
import Modal from '@/components/Modal/Modal'
import ModalConfirm from '@/components/Modal/Confirm/ModalConfirm'
import CalendarDates from "@/components/CalendarItem/CalendarDates";
import WeekDays from "@/components/CalendarItem/WeekDays";
import { useStore } from '../store/index';
import { useDate } from "@/composables/useDate";
import {onUpdated, ref} from 'vue';
import ModalTask from "@/components/ModalTask/ModalTask";

const days = useDate()
const store = useStore()
const isModalOpen = ref(false)
const isNewGroupActive = ref(false)
const isConfirm = ref(false)
const confirmId = ref(0)
const eventName = ref('')

const userWorkoutName = ref('')

let isOpenTaskModal = ref(false)
const taskId = ref(0)

const toggleModal = (day) => {
  isModalOpen.value = !isModalOpen.value

  if(day) {
    store.currentDayForCreateWorkout = day.format('D.MM.Y')
  }

  store.currentTaskColor = '11, 128, 67'
  store.isEditModal = false
}

// подтверждение удаления тренировки из конфирма
const getConfirmBoolean = (bool) => {
  if(bool) {
    store.userWorkout = store.userWorkout.filter(el => el.id !== confirmId.value)
    isOpenTaskModal.value = false
  }
  isConfirm.value = false
}

// удалить упражнение
const deleteWorkoutItem = (id) => {
  isConfirm.value = true
  confirmId.value = id
  eventName.value = store.userWorkout.find(el => el.id === confirmId.value)
}

// модалка чтения упражнения
const openTaskModal = (id) => {
  isOpenTaskModal.value = true
  taskId.value = id
}

// модалка редактирования из модалкаи чтения упражнения
// заполняем модалку данными из стора, если нажали редактирование
const openEditModal = (id) => {
  isModalOpen.value = !isModalOpen.value
  isOpenTaskModal.value = false

  let thisExercises = store.userWorkout.filter(el => el.id === id)
  
  store.currentExercise = thisExercises[0].exercises
  store.currentDayForCreateWorkout = thisExercises[0].date
  store.currentTaskColor = thisExercises[0].color
  userWorkoutName.value = thisExercises[0].userValue

  store.isEditModal = true

  store.taskEditId = id

  store.userWorkout = store.userWorkout.filter(el => el.id !== store.taskEditId)
}

// очищаем текущую тренировку при закрытии основного модального окна
onUpdated(() => {
  if(!isModalOpen.value) {
    store.clearExercise()
  }
})
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
  li {
    height: calc((100vh / 5) - 18px);
  }
}

.empty {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
}
</style>