<template>
  <ul
      v-if="isNewGroupVisible"
      class="groups">
    <li class="add-group">
      <div class="add-group__content">
        <input
            :value="groupName"
            @input="updateGroupName"
            type="text"
            placeholder="Название категории" />
      </div>
      <div class="btn-group">
        <Button
          size="sm"
          @click="toggleCreateForm"
        >Отменить</Button>
        <Button
          size="sm"
          :accentColor="true"
          @click="saveName"
        >
          Сохранить
        </Button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import Button from '@/components/UI/Button'

const props = defineProps({
  groupName: String,
  isNewGroupVisible: Boolean
})

const emit = defineEmits(['toggleCreateForm', 'updateGroupName'])
const toggleCreateForm = () => emit('toggleCreateForm')
const saveName = () => emit('saveName')
const updateGroupName = (event) => emit('update:groupName', event.target.value)
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  justify-content: stretch;
  gap: 8px;
  .small {
    flex: 1;
  }
}

.add-group {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;

  &__content {
    flex: 1 1 auto;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--c-border);
    border-radius: 6px;
    &:focus {
      outline: 2px solid var(--c-accent);
    }
  }
}
</style>