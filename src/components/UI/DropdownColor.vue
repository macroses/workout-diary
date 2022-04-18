<template>
  <div class="dropdown-color__container">
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
          :style="{backgroundColor: 'rgb(' + colorItem.rgb + ')' }"
          @click="getCurrentColor(colorItem.rgb)"></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const emit = defineEmits(['dropColor'])
const dropColor = () => emit('dropColor', defaultColor.value)

const defaultColor = ref('11, 128, 67')
const isDropDownActive = ref(false)

const toggleDropdown = () => isDropDownActive.value = !isDropDownActive.value

const getCurrentColor = (color) => {
  defaultColor.value = color
  isDropDownActive.value = false
}
</script>

<style lang="scss" scoped>
.dropdown-color__container {
  position: relative;
}

.dropdown-color__result {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
}

.dropdown-color {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  border-radius: 4px;
  min-width: 60px;
  padding: 8px;
  background: var(--c-bg);
  position: absolute;
  top: 0;
  right: 0;
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
}
</style>