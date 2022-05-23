<template>
  <div class="dropdown">
    <div
      @click="openList"
      class="result"
      :class="{ active: isListVisible }"
    >
      <Icon v-if="selectedOption" :iconName="selectedIcon"/>
      {{ selectedOption || 'Сортировка' }}
      <div class="appearance">
        <Icon iconName="angle-down"/>
      </div>
    </div>
    <transition name="slide-fade">
      <ul
        ref="sortList"
        v-if="isListVisible"
        class="options">
        <li
          v-for="option in options"
          :key="option.id"
          class="option"
          @click="selectOption(option)"
        >
          <Icon :iconName="option.iconName"/>
          {{ option.val }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import Icon from "@/components/UI/Icon"
import {ref} from "vue"
import { useOnClickOutside } from "@/composables/useClickOutside";

const props = defineProps({
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits()

const selectedOption = ref('')
const selectedIcon = ref('')
const isListVisible = ref(false)
const sortList = ref(null)

const openList = () => {
  isListVisible.value = !isListVisible.value
}

const selectOption = (option) => {
  isListVisible.value = !isListVisible.value
  selectedOption.value = option.val
  selectedIcon.value = option.iconName
  emit('selectOption', option)
}

useOnClickOutside(sortList, () => isListVisible.value = false)
</script>

<style lang="scss" scoped>
.dropdown {
  font-size: 14px;
  width: 180px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg {
    width: 10px;
    height: 10px;
  }
}

.result {
  padding: 8px;
  border: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;

  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  svg {
    margin-right: 11px;
  }
}

.appearance {
  margin-left: auto;

  svg {
    margin-right: 0;
  }
}

.options {
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  border: 1px solid var(--c-border);
  border-top: none;
  box-shadow: var(--shadow-block);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  overflow: hidden;
}

.option {
  padding: 6px 8px;
  font-size: 12px;
  background-color: var(--c-bg);

  &:hover {
    background-color: var(--c-block-hover);
  }
  svg {
    margin-right: 8px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  transform: translateY(0px);
}

.slide-fade-leave-active {
  transform: translateY(0px);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>