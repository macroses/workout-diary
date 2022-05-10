<template>
  <div class="theme-box" @click="toggleTheme()">
    <div
      class="theme-item"
      :class="{active: isDark}"
    >
      <Icon :iconName="!isDark ? 'brightness' : 'moon' " />
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/UI/Icon";
import { useTheme } from '@/composables/useTheme'

const [isDark, toggleTheme] = useTheme()
</script>

<style lang="scss">
.theme-box {
  width: 50px;
  margin-left: auto;
  cursor: pointer;
  border: 1px solid var(--c-border);
  border-radius: 30px;
  padding: 2px;
  display: flex;
  background-color: var(--c-block-hover);
  gap: 12px;
  svg {
    width: 14px;
    height: 14px;
    fill: var(--c-text);
  }
}

.theme-item {
  background: var(--c-bg);
  border-radius: 50%;
  border: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 0.3s;
  &.dark {
    margin-left: auto;
  }

  &.active {
    transform: translateX(24px);
  }
}
</style>