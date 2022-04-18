<template>
  <div class="modal-top">
    <div
        :class="{saveIcon: workoutName}"
        class="save-workout-btn"
        @click="workoutNameToStore">
      <Icon
          :iconName="workoutName ? 'circle-check' : 'ban'"
          class="check-icon"/>
      сохранить
    </div>

    <Icon
        class="closeIcon"
        iconName="xmark"
        @click="close"/>
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'
import { useStore } from '@/store'

const props = defineProps({
  workoutName: String,
  dayData: Object
})

const emit = defineEmits(['workoutNameToStore', 'close'])
const workoutNameToStore = () => emit('workoutNameToStore')
const close = () => emit('close')
</script>

<style lang="scss" scoped>
.modal-top {
  display: flex;
  justify-content: flex-end;
  background: var(--c-block-hover);
  padding: 4px 8px;
}

.save-workout-btn {
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--c-text-light);

  svg {
    fill: red;
  }

  &.saveIcon {
    color: var(--c-text-dark);
    cursor: pointer;

    svg {
      fill: var(--c-accent);
    }
  }
}

.check-icon {
  width: auto;
  height: 14px;
  margin-right: 8px;
}

.closeIcon {
  cursor: pointer;
}
</style>