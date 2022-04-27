<template>
  <ChosenListWrap>
    <ChosenItem
        v-for="exercise in store.currentExercise"
        :key="exercise.id"
    >
      <ChosenItemName
        :exercise="exercise"
        @openSetSettings="openSetSettings(exercise)"
      />
      
      <ChosenSettings
        :settings="exercise"
        :currentId="currentExerciseId"
      >
        <ModalLoadType @dropType="getType"/>
        <ModalExerciseSettings
          v-model:weight="weightSetData"
          v-model:repeats="repeatsSetData"
        />
        <Icon
          class="save"
          iconName="floppy-disk"
          @click="storeSet(exercise)"
        />
      </ChosenSettings>

      <ChosenSets :sets="exercise.sets"/>
    </ChosenItem>
  </ChosenListWrap>
</template>

<script setup>
import Icon from "@/components/UI/Icon"
import ModalLoadType from "@/components/Modal/ModalLoadType"
import ModalExerciseSettings from "@/components/Modal/ModalExerciseSettings"
import ChosenItem from "@/components/Modal/ChosenExercises/ChosenItem";
import ChosenItemName from "@/components/Modal/ChosenExercises/ChosenItemName";
import ChosenSettings from "@/components/Modal/ChosenExercises/ChosenSettings";
import ChosenSets from "@/components/Modal/ChosenExercises/ChosenSets";
import { useStore } from "@/store"
import { useGenerateId } from "@/composables/useGenerateId";
import {ref, watch} from "vue";
import ChosenListWrap from "@/components/Modal/ChosenExercises/ChosenListWrap";

const store = useStore()

const weightSetData = ref('')
const repeatsSetData = ref('')
let setType = null

const currentExerciseId = ref(0)

const clear = () => {
  weightSetData.value = ''
  repeatsSetData.value = ''
}

const openSetSettings = (item) => {
  item.isSettingsActive = !item.isSettingsActive
  currentExerciseId.value = item.id
  clear()
}

const getType = value => {
  setType = value
};

const storeSet = (item) => {
  if(!repeatsSetData.value) return

  let { lastId } = useGenerateId(store.currentExercise)

  store.currentExercise.forEach(exercise => {
    if(exercise.id === item.id) {
      exercise.sets = [
          ...exercise.sets,
        {
          id: lastId++,
          weight: weightSetData.value,
          repeats: repeatsSetData.value,
          setType: setType
        }
      ]
    }
  })

  item.isSettingsActive = false
  clear()
}
</script>

<style lang="scss" scoped>
.save {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}
</style>