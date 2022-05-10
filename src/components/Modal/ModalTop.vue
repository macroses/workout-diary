<template>
  <div
      class="modal-top"
      :style="{backgroundColor: 'rgb(' + store.currentTaskColor + ')' }"
  >
    <div
        :class="{saveIcon: workoutName}"
        class="save-workout-btn"
        @click="workoutNameToStore">
      сохранить
      <Icon v-if="workoutName"
          iconName="floppy-disk"
          class="check-icon"/>
    </div>

    <div
        @click="close"
        class="icon-wrap">
      <Icon
          class="closeIcon"
          iconName="xmark"
          />
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'
import { useStore } from '@/store'

const props = defineProps({
  workoutName: String,
  dayData: Object,
})

const store = useStore()

const emit = defineEmits(['workoutNameToStore', 'close'])
const workoutNameToStore = () => emit('workoutNameToStore')
const close = () => emit('close')
</script>

<style lang="scss" scoped>
.modal-top {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
}

.save-workout-btn {
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--c-text-light);

  &.saveIcon {
    color: var(--c-text-invert);
    cursor: pointer;
  }
}

.check-icon {
  fill: var(--c-text-invert);
  width: 18px;
  height: 18px;
  margin-left: 8px;
}

.closeIcon {
  cursor: pointer;
  width: 18px;
  height: 18px;
  fill: var(--c-text-invert);
}

.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: background-color 0.3s;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255, 0.2)
  }
}
</style>