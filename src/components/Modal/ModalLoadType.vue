<template>
  <ul class="load-type">
    <li
        v-for="(type, index) in loadTypes"
        :key="type.id"
        @click="dropType(type.color); toggleACtiveClass(index)"
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
const dropType = (value) => {
  emit('dropType', value)
}

const toggleACtiveClass = (index) => {
  activeItem.value = index
}

const loadTypes = [
  {id: 1, name: 'размин', active: false, color: '#222'},
  {id: 2, name: 'легк', active: false, color: '#66bb6a'},
  {id: 3, name: 'норм', active: false, color: '#f6bf26'},
  {id: 4, name: 'тяж', active: false, color: '#f45103'},
]
</script>

<style lang="scss" scoped>
.load-type {
  display: flex;
  margin-top: 8px;
  padding-left: 6px;

  li {
    flex-grow: 1;
    font-size: 10px;
    margin-right: 8px;
    padding: 1px 4px 2px;
    border: 1px solid var(--c-border);
    border-radius: 4px;
    text-align: center;
    color: var(--c-text);
    cursor: pointer;
    
    &.active {
      background: #222;
      border-color: #222;
      color: var(--c-bg);
      &:nth-child(2) {
        background: #66bb6a;
        border-color: #66bb6a;
      }
      &:nth-child(3) {
        background: #f6bf26;
        border-color: #f6bf26;
      }
      &:nth-child(4) {
        background: #f45103;
        border-color:#f45103;
      }
    }
  }
}
</style>