<template>
  <div class="settings-inputs">
    <div>
      <input
          type="text"
          placeholder="кг"
          @input="updateWeight"
          @keydown="useOnlyNumbers"
          :value="weight"
      >
    </div>
    <div>
      <input
          type="text"
          placeholder="повт"
          @input="updateRepeats"
          @keydown="useOnlyNumbers"
          :value="repeats"
      >
    </div>
  </div>
</template>

<script setup>
import { useOnlyNumbers } from "@/composables/useOnlyNumbers"

const props = defineProps({
  weight: String,
  repeats: String,
})

const emit = defineEmits(['updateWeight', 'updateRepeats'])
const updateWeight = (event) => emit('update:weight', event.target.value)
const updateRepeats = (event) => emit('update:repeats', event.target.value)
</script>

<style lang="scss" scoped>
.settings-inputs {
  display: flex;
  gap: 16px;
  padding: 0 8px;
  margin-top: 8px;
  div {
    width: 50px;

  }
}

input {
  font-size: 12px;
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--c-border);
}
</style>