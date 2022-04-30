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
import {ref, watch} from "vue";

const props = defineProps({
  weight: String,
  repeats: String,
})

const fillIconValue = ref('#a4adaf')

const emit = defineEmits(['updateWeight', 'updateRepeats'])
const updateWeight = (event) => emit('update:weight', event.target.value)
const updateRepeats = (event) => emit('update:repeats', event.target.value)
const storeSet = () => emit('storeSet')

watch(() => props.repeats, (value) => {
  if (value !== '') {
    fillIconValue.value = '#66bb6a'
  }
}, {immediate: true})
</script>

<style lang="scss" scoped>
.settings-inputs {
  display: flex;
  gap: 8px;
  div {
    flex-grow: 1;
  }
}

input {
  font-size: 12px;
  width: 100%;
  outline: 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 0 6px;
  height: 26px;
}
</style>