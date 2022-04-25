<template>
  <ul class="chosen-list">
    <li
        class="chosen-item"
        v-for="exercise in store.currentExercise"
        :key="exercise.id"
    >
      <div class="name">
        {{exercise.name}}
        <div class="icon-area"
             @click="openApproachSettings(exercise)"
        >
          <Icon iconName="plus"/>
        </div>
      </div>

      <div
           class="settings"
           :class="{active: exercise.isSettingsActive}"
      >
        <ModalLoadType @dropType="getType"/>
        <ModalExerciseSettings
            v-model:weight="weightApproachData"
            v-model:repeats="repeatsApproachData"/>
        <Icon iconName="floppy-disk" @click="storeApproach(exercise)"/>
      </div>

      <ul class="approaches">
        <li
            v-for="approach in exercise.approaches"
            :key="approach.id"
            class="approach-item"

        >
          <div
              class="approachType-indicator"
              :style="{backgroundColor: approachType.color}"
          ></div>
          <div class="weight-item">{{approach.weight}} <span>кг</span></div>
          <div class="repeats-item">{{approach.repeats}} <span>пт</span></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/components/UI/Icon"
import ModalLoadType from "@/components/Modal/ModalLoadType"
import ModalExerciseSettings from "@/components/Modal/ModalExerciseSettings"
import { useStore } from "@/store"
import { useGenerateId } from "@/composables/useGenerateId";
import {ref, watch} from "vue";

const store = useStore()

const isDataCompleted = ref(false)

const weightApproachData = ref('')
const repeatsApproachData = ref('')
const approachType = ref('')


const openApproachSettings = item => item.isSettingsActive = !item.isSettingsActive

const getType = value => approachType.value = value

const storeApproach = (item) => {
  let { lastId } = useGenerateId(store.currentExercise)

  store.currentExercise.forEach((exercise, _, arr) => {
    if(exercise.id === item.id) {
      exercise.approaches = [
          ...exercise.approaches,
        {
          id: lastId++,
          weight: weightApproachData.value,
          repeats: repeatsApproachData.value,
          approachType: approachType.value
        }
      ]
    }
  })

  item.isSettingsActive = false
  isDataCompleted.value = true
}

watch(() => isDataCompleted.value, (value) => {
  if(value) {
    weightApproachData.value = ''
    repeatsApproachData.value = ''
  }
})
</script>

<style lang="scss" scoped>
.approachType-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 auto;
}

.approaches {
  display: flex;
  gap: 8px;
  padding: 0 6px;
  .approach-item {
    cursor: pointer;
    padding-bottom: 6px;
  }
}

.weight-item, .repeats-item {
  font-size: 11px;
  span {
    font-size: 10px;
    color: var(--c-text-light);
  }
}

.chosen-list {
  width: 300px;
  border-left: 1px solid var(--c-border);
}

.name {
  font-size: 11px;
  font-weight: 600;
  background: var(--c-block-hover);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;

  svg {
    width: 14px;
    height: 14px;
  }

  .icon-area {
    padding: 6px;
    cursor: pointer;
  }
}

.settings {
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
  position: relative;
  &.active {
    height: 55px;
  }

  svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
}

.chosen-item {
  border-bottom: 1px solid var(--c-border);
}
</style>