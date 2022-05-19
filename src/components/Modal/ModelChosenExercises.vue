<template>
  <ChosenListWrap>
    <VueDraggableNext :list="store.currentExercise">
      <transition-group name="list">
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
            <ModalExerciseSettings
              v-model:weight="weightSetData"
              v-model:repeats="repeatsSetData"
              @storeSet="storeSet(exercise)"
            />
            <ModalLoadType @dropType="getType"/>
            <Button
              @click="storeSet(exercise)"
              size="sm"
              :accentColor="!!repeatsSetData"
            >
              Сохранить
            </Button>
          </ChosenSettings>
          <ChosenSets :sets="exercise.sets"/>
        </ChosenItem>
      </transition-group>
    </VueDraggableNext>
  </ChosenListWrap>
</template>

<script setup>
import ModalLoadType from "@/components/Modal/ModalLoadType"
import ModalExerciseSettings from "@/components/Modal/ModalExerciseSettings"
import ChosenItem from "@/components/Modal/ChosenExercises/ChosenItem";
import ChosenItemName from "@/components/Modal/ChosenExercises/ChosenItemName";
import ChosenSettings from "@/components/Modal/ChosenExercises/ChosenSettings";
import ChosenSets from "@/components/Modal/ChosenExercises/ChosenSets";
import { VueDraggableNext } from 'vue-draggable-next';
import { useStore } from "@/store"
import {ref} from "vue";
import ChosenListWrap from "@/components/Modal/ChosenExercises/ChosenListWrap";
import Button from "@/components/UI/Button";

const store = useStore()

const weightSetData = ref('')
const repeatsSetData = ref('')
const currentExerciseId = ref(0)

let setType = ref(null)

const clear = () => {
  weightSetData.value = ''
  repeatsSetData.value = ''
}

const openSetSettings = (item) => {
  item.isSettingsActive = !item.isSettingsActive
  currentExerciseId.value = item.id
  clear()
}

const getType = value => setType.value = value

const storeSet = item => {
  store.storeSet( item, weightSetData.value, repeatsSetData.value, setType.value)
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>