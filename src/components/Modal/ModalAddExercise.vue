<template>
  <div class="exercise-category">
    <ul
      v-if="!isNewGroupVisible"
      class="groups">
      <li 
        v-for="(exerciseGroup, index) in exerciseGroups"
        :key="exerciseGroup.id"
        @click="selectGroupId(exerciseGroup.id, index)"
        class="exercisegroup-item"
        :class="{active: index === activeGroupNameItem}"
        :style="[index === activeGroupNameItem ? `border-right-color: rgb(${store.currentTaskColor})`: ''] "
      >
        <Icon :iconName="exerciseGroup.iconName"/>
        {{exerciseGroup.groupName}}
      </li>

      <ExerciseAddGroup @click="createNewGroup"/>
    </ul>

    <ExerciseAddForm
      :isNewGroupVisible="isNewGroupVisible"
      v-model:groupName="newGroupName"
      @toggleCreateForm="isNewGroupVisible = false"
      @saveName="toExerciseGroup"
    />

    <ModalExercisesList
      :groupId="exercisesGroupId"
      :exercisesList="exercisesList"
    />
    <ModelChosenExercises />
  </div>
</template>

<script setup>
import Icon from '@/components/UI/Icon'
import Exercises from '@/api/api'
import {onMounted, ref} from 'vue'
import { useStore } from '@/store'
import ModalExercisesList from "@/components/Modal/ModalExercisesList"
import ModelChosenExercises from "@/components/Modal/ModelChosenExercises"
import ExerciseAddGroup from "@/components/Modal/ExerciseCategory/ExerciseAddGroup"
import ExerciseAddForm from "@/components/Modal/ExerciseCategory/ExerciseAddForm"

let isNewGroupVisible = ref(false)
let exerciseGroups = ref([])
let exercisesList = ref([])
let exercisesGroupId = ref(0)
let activeGroupNameItem = ref(null)
let newGroupName = ref('')

const store = useStore()

onMounted(async() => {
  exerciseGroups.value = await Exercises.getExercisesGroup()
  exercisesList.value = await Exercises.getExercisesList()
})

const selectGroupId = (id, index) => {
  exercisesGroupId.value = id
  activeGroupNameItem.value = index
}

const toExerciseGroup = () => {
  if(!newGroupName.value) return

  exerciseGroups.value = [
    ...exerciseGroups.value,
    {
      id: exerciseGroups.value[exerciseGroups.value.length - 1].id + 1,
      groupName: newGroupName.value,
      iconName: ''
    }
  ]
  isNewGroupVisible.value = false
}

const createNewGroup = () => {
  isNewGroupVisible.value = true
  newGroupName.value = ''
}
</script>

<style lang="scss" scoped>
.exercise-category {
  display: flex;
  margin-top: 16px;
  border-top: 1px solid var(--c-border);
  flex: 1 1 auto;
}

.close {
  background: transparent;
  border: none;
}

.exercisegroup-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  border-right: 6px solid transparent;
  color: var(--c-text);
  &:hover {
    background-color: var(--c-block-hover);
  }

  svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
  }
}

.groups {
  min-width: 250px;
}

.createCategoryForm {
  padding: 0 16px;
  .inp-wrap {
    margin: 16px 0;
  }
}


</style>