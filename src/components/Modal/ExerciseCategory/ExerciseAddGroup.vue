<template>
  <li
      class="exercisegroup-item">
    <Icon iconName="plus"/>
    Добавить свою группу
  </li>
</template>

<script setup>
import Icon from "@/components/UI/Icon";
</script>

<style lang="scss" scoped>
.exercisegroup-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  color: var(--c-text);
  &:hover {
    background-color: var(--c-block-hover);
  }

  svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
  }

  &.active {
    color: var(--c-bg);

    svg {
      fill: var(--c-bg);
    }
  }
}
</style>