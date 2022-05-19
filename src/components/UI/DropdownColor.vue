<template>
  <div 
    ref="container"
    class="dropdown-color__container">
    <div class="title">цвет задачи</div>
    <div
        @click="toggleDropdown"
        class="dropdown-color__result"
        :style="{ backgroundColor:'rgb(' + defaultColor + ')' }">
    </div>
    <ul
        v-if="isDropDownActive"
        class="dropdown-color">
      <li
        v-for="colorItem in colorCollection"
        :key="colorItem.id"
        :style="{ backgroundColor: 'rgb(' + colorItem.rgb + ')' }"
        :class="{ active: colorItem.rgb === defaultColor }"
        @click="dropColor(colorItem.rgb)"
      >
      </li>
    </ul>

    <div class="faq" title="Перетаскивайте тренировки и подходы мышкой в нужном порядке">
      <Icon iconName="square-question"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useStore} from "@/store";
import {useOnClickOutside} from "@/composables/useClickOutside";
import Icon from "./Icon.vue";

const colorCollection = [
  {id: 1, rgb: '213, 0, 0'},
  {id: 2, rgb: '230, 124, 115'},
  {id: 3, rgb: '244, 81, 3'},
  {id: 4, rgb: '246, 191, 38'},
  {id: 5, rgb: '51, 182, 121'},
  {id: 6, rgb: '11, 128, 67'},
  {id: 7, rgb: '3, 155, 229'},
  {id: 8, rgb: '63, 81, 181'},
  {id: 9, rgb: '121, 134, 203'},
  {id: 10, rgb: '142, 36, 170'},
  {id: 11, rgb: '97, 97, 97'},
]

const store = useStore()
const container = ref(null)

const defaultColor = ref(store.currentTaskColor)
const isDropDownActive = ref(false)

const toggleDropdown = () => isDropDownActive.value = !isDropDownActive.value

const dropColor = (color) => {
  store.currentTaskColor = color
  defaultColor.value = color
  isDropDownActive.value = false
}

useOnClickOutside(container, () => isDropDownActive.value = false)
</script>

<style lang="scss" scoped>
.dropdown-color__container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 16px 0;
  padding: 0 16px;
}

.faq {
  margin-left: auto;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--c-text-light);
  }
}

.dropdown-color__result {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid var(--c-bg);
  outline: 1px solid var(--c-border);

}

.dropdown-color {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 60px;

  border-radius: 4px;
  min-width: 60px;
  padding: 8px;
  background: var(--c-bg);
  position: absolute;
  top: 12px;
  left: 32px;
  z-index: 2;
  box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%),
              0px 3px 14px 2px rgb(0 0 0 / 12%),
              0px 5px 5px -3px rgb(0 0 0 / 20%);

  li {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  .active {
    position: relative;
    &:after {
      content: '\2713';
      position: absolute;
      color: #fff;
      font-weight: bold;
      font-size: 10px;
      top: 2px;
      left: 5px;
    }
  }
}

.title {
  color: var(--c-text-light);
  font-size: 12px;
  margin-right: 8px;
}
</style>