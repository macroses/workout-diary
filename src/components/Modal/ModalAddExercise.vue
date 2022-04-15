<template>
  <div class="exercise-category">
    <ul
      v-if="!isNewGroupFormVisible" 
      class="groups">
      <li 
        v-for="exerciseGroup in exerciseGroups" 
        :key="exerciseGroup.id"
        class="exercisegroup-item">
        <Icon :iconName="exerciseGroup.iconName"/>
        {{exerciseGroup.groupName}}
      </li>
      <li 
        @click="createCategoryForm"
        class="exercisegroup-item">
        <Icon iconName="plus"/>
        Добавить свою группу
      </li>
    </ul>

    <div 
      v-else
      class="createCategoryForm">
      <InputText 
        @userInput="dropUsersGroupNameToStore"
        :inputValue="usersInputValue" 
        pholder="Название группы" />
      <div class="btn-group">
        <Button
          @click="createCategoryForm"
          iconName="ban">Отменить</Button>
        <Button 
          @click="toExerciseGroup"
          iconName="floppy-disk">Сохранить</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'
import Exercises from '@/api/api'
import { onMounted, ref } from 'vue'
import Button from '@/components/UI/Button.vue';
import InputText from '@/components/UI/InputText.vue';
import { useStore } from '@/store/index';

let usersInputValue = ref('')
let isNewGroupFormVisible = ref(false)
let exerciseGroups = ref([])
onMounted(async() => exerciseGroups.value = await Exercises.getExercisesGroup())

const createCategoryForm = () => isNewGroupFormVisible.value = !isNewGroupFormVisible.value

const store = useStore()

const dropUsersGroupNameToStore = (value) => {
  store.usersGroupName = value
}

const toExerciseGroup = () => {
  exerciseGroups.value = [
    ...exerciseGroups.value,
    {
      id: exerciseGroups.value[exerciseGroups.value.length - 1].id + 1,
      groupName: store.usersGroupName,
      iconName: ''
    }
  ]
  isNewGroupFormVisible.value = false
}
</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
}

.close {
  background: transparent;
  border: none;
}

.groups {
  margin-top: 16px;
}

.exercisegroup-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: var(--c-block-hover);
  }

  svg {
    margin-right: 16px;
  }
}

.createCategoryForm {
  padding: 0 16px;
  .inp-wrap {
    margin: 16px 0;
  }
}

.btn-group {
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 8px;
  }
}
</style>