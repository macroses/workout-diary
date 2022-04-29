<template>
  <div :class="{accentBtn: accentColor}">
    <Icon
        v-if="iconName"
        :iconName="iconName" />
    <slot />
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'

const props = defineProps({
  iconName: String,
  accentColor: Boolean
})

</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 5px 12px;
  font-weight: 500;
  color: var(--c-text);
  cursor: pointer;
  min-height: 36px;
  max-height: 36px;
  &:hover {
    background: var(--c-block-hover);
  }
}

.accentBtn {
  color: var(--c-bg);
  background: var(--c-accent);
  &:hover {
    background: var(--c-accent-hover);
  }
}

svg {
  margin-right: 8px;
}
</style>