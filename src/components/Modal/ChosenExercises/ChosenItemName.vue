<template>
  <div class="name">
    {{exercise.name}}
    <div class="icon-area"
      @click="openSetSettings"
    >
      <Icon iconName="plus"/>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'

const props = defineProps({
  exercise: Object
})

const emit = defineEmits(['openSetSettings'])
const openSetSettings = () => emit('openSetSettings')
</script>

<style lang="scss" scoped>
.name {
  font-size: 13px;
  font-weight: 600;
  background: var(--c-block-hover);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 16px;
  color: var(--c-text);

  svg {
    width: 14px;
    height: 14px;
  }

  .icon-area {
    padding: 6px;
    cursor: pointer;
  }
}
</style>