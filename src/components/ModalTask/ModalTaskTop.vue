<template>
  <div class="modal-task-top">
    <div class="date">
      {{ dateExercise }}
    </div>
    <div @click="editItem" class="icon-wrap">
      <Icon iconName="pen"/>
    </div>
    <div @click="deleteItem" class="icon-wrap">
      <Icon iconName="trash-can"/>
    </div>
    <div @click="closeModal" class="icon-wrap">
      <Icon iconName="xmark"/>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'

const props = defineProps({
  dateExercise: String
})

const emit = defineEmits(['closeModal', 'editItem', 'deleteItem'])
const closeModal = () => emit('closeModal')
const editItem = () => emit('editItem')
const deleteItem = () => emit('deleteItem')
</script>

<style lang="scss" scoped>
.modal-task-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 16px 12px 24px;
}

.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: background-color 0.3s;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background: var(--c-block-hover);
  }

  svg {
    width: 16px;
    height: 16px;
  }
}

.date {
  margin-right: auto;
  font-size: 14px;
  color: var(--c-text);
}
</style>