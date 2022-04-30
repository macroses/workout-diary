<template>
  <div
      class="settings"
      :class="{ active: isActiveClass.isSettingsActive }"
  >
    <slot />
  </div>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  settings: Object,
  currentId: Number
})

const isActiveClass = props.settings

watch(() => props.currentId, (value) => {
  isActiveClass.isSettingsActive = props.settings.id === value;
})
</script>

<style lang="scss" scoped>
.settings {
  height: 0;
  transition: height 0.3s;
  position: relative;

  padding: 0 6px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
  &.active {
    height: 38px;
    overflow: visible;
  }

  //svg {
  //  position: absolute;
  //  right: 16px;
  //  top: 16px;
  //  cursor: pointer;
  //}
}
</style>