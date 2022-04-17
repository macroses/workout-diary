<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal-box" v-if="isModalActive">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <div class="modal-top">
            <Icon
                iconName="xmark"
                @click="close"
                class="closeIcon"/>
          </div>
          <div class="modal-header">
            <div class="inp-workoutName__box">
              <input
                  type="text"
                  v-if="isWorkoutNameActive"
                  v-model="workoutName"
                  placeholder="Название тренировки"
                  @keydown.enter="workoutNameToStore(workoutName, dayData.format('D.MM.Y'))"
                  class="inp-workoutName"/>
              <div class="workoutName-result" v-else> {{ workoutName }}</div>
            </div>
          </div>
          <div class="modal-content">
            <div
                class="day-of-workout__desc"
                :class="{today: checkDateEqually(dayData)}">
                Дата тренировки:
              <span>
                {{ checkDateEqually(dayData) ? "сегодня" : dayData.format('D.MM.Y') }}
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
import Icon from '@/components/UI/Icon'
import moment from "moment";
import {ref} from "vue";
import { useStore } from '@/store'

const props = defineProps({
  isModalActive: Boolean,
  title: String,
  dayData: Object,
  isWorkoutNameActive: Boolean
})

const store = useStore()

const emits = defineEmits(['close'])
const close = () => emits('close')

const checkDateEqually = (day) => moment().isSame(day, 'day')

const workoutName = ref('')
const isWorkoutNameActive = ref(true)

const workoutNameToStore = (value, date) => {
  store.userWorkoutName.userValue = value
  store.userWorkoutName.date = date
  isWorkoutNameActive.value = false
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
}

.inp-workoutName {
  border: 0;
  border-bottom: 2px solid var(--c-border);
  font-size: 20px;
  outline: none;
  transition: all 0.3s;
  &:focus {
    border-bottom-color: var(--c-accent);
  }

  &::placeholder {
    color: var(--c-text-light);
    font-size: 16px;
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

.closeIcon {
  cursor: pointer;
}

.modal {
  position: absolute;
  left: 50%; 
  top: 50%;
  max-width: 32em;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  border-radius: 0.2em;
  background: white;
}

.workoutName-result {
  font-weight: 600;
}

.modal-top {
  display: flex;
  justify-content: flex-end;
  background: var(--c-block-hover);
  padding: 4px 8px;
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