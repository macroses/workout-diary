<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal-box" v-if="isModalActive">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <ModalTop
              @close="close"
              @workoutNameToStore="workoutNameToStore"
              :workoutName="workoutName"
              :dayData="dayData"
          />

          <div class="modal-header">
            <div
                class="inp-workoutName__box"
                v-if="isWorkoutName">
              <input
                  v-model="workoutName"
                  v-focus-on-load
                  class="inp-workoutName"
                  placeholder="Название тренировки"
                  type="text"
                  @keydown.enter="workoutNameToStore"/>
              
            </div>
            
          </div>

          <div class="modal-content">
            <DropdownColor @dropColor="getTaskColor"/>
            <div
                class="day-of-workout__desc"
                :class="{ today: useDateEquality(dayData) }">
                Дата тренировки:
              <span>
                {{ useDateEquality(dayData) ? "сегодня" : dayData.format('D.MM.Y') }}
              </span>
              </div>
            <slot name="modalContent"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import DropdownColor from "@/components/UI/DropdownColor";
import ModalTop from "@/components/Modal/ModalTop";
import { ref } from "vue";
import { useDateEquality } from "@/composables/useDate";
import { vFocusOnLoad } from "@/directives/myDirectives";
import { useStore } from '@/store'

const props = defineProps({
  isModalActive: Boolean,
  title: String,
  dayData: Object,
  isWorkoutNameActive: Boolean,
  isNewGroupActive: Boolean,
})

const workoutName = ref('')
const isWorkoutName = ref(true)
const store = useStore()

const emits = defineEmits(['close'])
const close = () => emits('close')

let currentColor = ref('')

const getTaskColor = (data) => {
  currentColor.value = data;
}

const workoutNameToStore = () => {
  if(!workoutName.value) return

  let lastId = 0

  if(store.userWorkout.length) {
    lastId = store.userWorkout[store.userWorkout.length - 1].id
  }

  store.userWorkout.push({
    id: lastId + 1,
    userValue: workoutName.value,
    color: store.currentTaskColor,
    date: props.dayData.format('D.MM.Y'),
    exercises: store.currentExercise
  })
  workoutName.value = ''
  store.currentExercise = []
  store.currentTaskColor = '11, 128, 67'

  close()
}

</script>

<style lang="scss" scoped>
.layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
}

.day-of-workout__desc {
  font-size: 12px;
  padding: 8px 16px;
  color: var(--c-text-light);
  span {
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
}

.inp-workoutName__box {
  margin-top: 16px;
  display: flex;
  gap: 8px;
  flex: 1;
}

.inp-workoutName {
  border: 0;
  width: 100%;
  border-bottom: 1px solid var(--c-border);
  padding: 4px 0;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
  &:focus {
    border-bottom-color: var(--c-accent);
  }

  &::placeholder {
    color: var(--c-text-light);
    font-size: 14px;
    font-weight: 300;
  }
}

.title {
  font-size: 20px;
  font-weight: 500;
  span {
    display: inline-block;
    padding: 1px 4px;
    border-radius: 4px;
  }
}


.modal {
  position: absolute;
  left: 50%; 
  top: 50%;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  border-radius: 0.2em;
  background: white;
  border-radius: 8px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>