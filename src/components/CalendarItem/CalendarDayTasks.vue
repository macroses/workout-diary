<template>
  <div
    class="day-tasks"
    v-for="item in checkEqualDates(day.format('D.MM.Y'))"
    :key="item.id"
    :style="{backgroundColor: 'rgba(' + item.color + ', 0.5)'}"
    :title="item.userValue"
    @click.stop="openTaskModal(item.id)"
    draggable="true"
    @dragstart="handleStartDrag(item.id)"
  >
    <div class="task-name">{{ item.userValue }}</div>
    <div
        @click.stop="deleteWorkoutItem(item.id)"
        class="icon-wrap"
        title="удалить тренировку">
      <Icon
        class="delete-task"
        iconName="xmark"/>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/store'
import Icon from "@/components/UI/Icon"
import {ref} from "vue";
import ModalTask from "@/components/ModalTask/ModalTask";

const props = defineProps({
  day: String,
})

const emit = defineEmits()
const deleteWorkoutItem = (value) => emit('deleteWorkoutItem', value)
const openTaskModal = (value) => emit('openTaskModal', value)

// drags events
const handleStartDrag = (ev) => emit('handleStartDrag', ev)

const store = useStore()

const checkEqualDates = (date) => {
  return store.userWorkout.filter(el => {
    if (el.date === date) {
      return el.userValue
    }
  })
}

</script>

<style lang="scss" scoped>
.day-tasks {
  position: relative;
  text-align: left;
  font-size: 11px;
  padding: 2px 8px;
  color: var(--c-text-invert);
  height: 36px;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    .icon-wrap{
      display: flex;
    }
  }
}

.task-name {
  max-width: calc(100% - 25px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-wrap {
  display: none;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  position: absolute;
  right: 6px;
  top: calc(50% - 14px);
  &:hover {
    background: rgba(255,255,255,0.2);
  }
}

.delete-task {
  width: 14px;
  height: 14px;
  fill: var(--c-text-invert);
}
</style>