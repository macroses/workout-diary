<template>
  <div class="modal-header">
    <div
        class="inp-workoutName__box"
        v-if="isWorkoutName">
      <input
          @input="updateValue"
          :value="modelValue"
          v-focus-on-load
          type="text"
          @keydown.enter="dropNameToStore"
          class="inp-workoutName"
          placeholder="Название тренировки"/>
    </div>
  </div>
</template>

<script setup>
import { vFocusOnLoad } from "@/directives/myDirectives"

const props = defineProps({
  isWorkoutName: Boolean,
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'dropNameToStore'])
const dropNameToStore = () => emit('dropNameToStore')
const updateValue = (event) => emit('update:modelValue', event.target.value)
</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.inp-workoutName__box {
  margin-top: 16px;
  display: flex;
  gap: 8px;
  flex: 1;
}

.inp-workoutName {
  width: 100%;
  border: 1px solid var(--c-border);
  background-color: var(--c-input);
  color: var(--c-text);
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
  &:focus {
    border-color: var(--c-accent);
  }

  &::placeholder {
    color: var(--c-text-light);
    font-size: 14px;
    font-weight: 300;
  }
}
</style>