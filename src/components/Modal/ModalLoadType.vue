<template>
  <ul class="load-type">
    <li
        v-for="(type, index) in loadTypes"
        :key="type.id"
        @click="dropType(type.active, index)"
        :class="{active: index === activeItem}"
    >
      {{ type.name }}
    </li>
  </ul>
</template>

<script setup>
import {ref} from "vue";

const activeItem = ref(null)

const emit = defineEmits(['dropType'])
const dropType = (value, index) => {
  emit('dropType', value)
  activeItem.value = index
}

const loadTypes = [
  {id: 1, name: 'размин', active: false},
  {id: 2, name: 'легк', active: false},
  {id: 3, name: 'норм', active: false},
  {id: 4, name: 'тяж', active: false},
]
</script>

<style lang="scss" scoped>
.load-type {
  display: flex;
  margin-top: 4px;
  padding-left: 6px;

  li {
    font-size: 10px;
    margin-right: 8px;
    padding: 1px 4px 2px;
    border: 1px solid var(--c-border);
    border-radius: 10px;
    color: var(--c-text);
    cursor: pointer;
    
    &.active {
      background: var(--c-text);
      border-color: var(--c-text);
      color: var(--c-bg);
      &:nth-child(2) {
        background: var(--c-accent);
        border-color: var(--c-accent);
      }
      &:nth-child(3) {
        background: rgb(246, 191, 38);
        border-color: rgb(246, 191, 38);
      }
      &:nth-child(4) {
        background: rgb(244, 81, 3);
        border-color:rgb(244, 81, 3);
      }
    }
  }
}
</style>