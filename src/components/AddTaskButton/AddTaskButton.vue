<template>
  <div class="add_task_box">
    <div
        @click="toggleOptionsList"
        :class="{fullSize : isMenuOpen}"
        class="add_task" >
      <Icon iconName="plus"/>
      <span v-if="isMenuOpen">Создать</span>
    </div>
    <ul
        ref="taskOptionsList"
        v-if="isOptionsListOpen"
        class="add_task_options">
      <li>Добавить упражнение</li>
      <li>Добавить тренировку</li>
    </ul>
  </div>
</template>

<script setup>
import Icon from "@/components/UI/Icon"
import {ref} from "vue"
import {useOnClickOutside} from "@/composables/useClickOutside";

const props = defineProps({
  isMenuOpen: { type: Boolean }
})

const taskOptionsList = ref(null)

let isOptionsListOpen = ref(false)

const toggleOptionsList = () => isOptionsListOpen.value = !isOptionsListOpen.value
useOnClickOutside(taskOptionsList, () => isOptionsListOpen.value = false)
</script>

<style lang="scss" scoped>
.add_task_box {
  position: absolute;
  left: 24px;
  top: calc(100% + 12px);
}

.modal-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
}

.add_task {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  padding-left: 0;
  cursor: pointer;
  color: var(--c-text-invert);
  background: var(--c-accent);
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
              0 2px 2px 0 rgb(0 0 0 / 14%),
              0 1px 5px 0 rgb(0 0 0 / 12%);
  transition: all 280ms cubic-bezier(.4,0,.2,1);

  &:hover {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  }
}

.fullSize {
  width: 135px;
  svg {
    margin-right: 8px;
  }
}

svg {
  fill: var(--c-text-invert);
}

.add_task_options {
  list-style: none;
  box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%),
              0 3px 14px 2px rgb(0 0 0 / 12%),
              0 5px 5px -3px rgb(0 0 0 / 20%);
  background-color: var(--c-bg);
  font-size: 13px;
  font-weight: 500;
  padding: 8px 0;
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 2;

  li {
    padding: 0 16px;
    cursor: pointer;
    height: 29px;
    line-height: 32px;
    white-space: nowrap;

    &:hover {
      background: var(--c-block-hover);
    }
  }
}
</style>