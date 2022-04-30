<template>
  <div class="load-type-box">
    <div
        @click="isLoadType = !isLoadType"
        class="result">
      <div
          :style="{backgroundColor: resultColor}"
          class="result-color"
      ></div>
      <div class="result-name">{{ resultName }}</div>
      <Icon :iconName="isLoadType ? 'angle-up' : 'angle-down'"/>
    </div>
    <ul
        ref="list"
        v-if="isLoadType"
        class="load-type">
      <li
          v-for="(type, index) in loadTypes"
          :key="type.id"
          @click="dropType(type.color); toggleACtiveClass(index, type)"
          class="type-item"
          :class="{active: index === activeItem}"
          :title="type.name"
      >
        <div
            :style="{backgroundColor: type.color}"
            class="result-color"
        ></div>
        {{type.name}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useOnClickOutside} from "@/composables/useClickOutside";
import {ref} from "vue";
import Icon from "@/components/UI/Icon";

const activeItem = ref(null)
const resultName = ref('Тип нагрузки')
const resultColor = ref('transparent')
const isLoadType = ref(false)
const list = ref(null)

const emit = defineEmits(['dropType'])
const dropType = (value) => {
  emit('dropType', value)
}

const toggleACtiveClass = (index, item) => {
  activeItem.value = index
  resultName.value = item.name
  resultColor.value = item.color
  isLoadType.value = false
}

const loadTypes = [
  {id: 1, name: 'размин', active: false, color: '#222'},
  {id: 2, name: 'легкий', active: false, color: '#66bb6a'},
  {id: 3, name: 'нормальный', active: false, color: '#f6bf26'},
  {id: 4, name: 'тяжелый', active: false, color: '#f45103'},
]

useOnClickOutside(list, () => isLoadType.value = false)
</script>

<style lang="scss" scoped>
.load-type-box {
  position: relative;
}

.load-type {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  top: 100%;
  width: 100%;
  z-index: 5;

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
              0 3px 14px 2px rgba(0, 0, 0, 0.12),
              0 5px 5px -3px rgba(0, 0, 0, 0.2)
}

.type-item {
  cursor: pointer;
  background: var(--c-bg);
  font-size: 11px;
  padding: 5px 9px;
  display: flex;
  align-items: center;
  &:hover {
    background: var(--c-block-hover);
  }
}

.result {
  border: 1px solid var(--c-border);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 200;
  width: 120px;
  padding: 0 8px;
  height: 26px;
  display: flex;
  align-items: center;
  color: var(--c-text);
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: var(--c-block-hover);
  }

  svg {
    position: absolute;
    right: 6px;
    top: 9px;
    width: 10px;
    height: 10px;
  }
}

.result-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--c-border);
  margin-right: 6px;
}

.result-name {
  margin-bottom: 2px;
}
</style>