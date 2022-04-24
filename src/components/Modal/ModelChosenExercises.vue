<template>
  <ul class="chosen-list">
    <li
        class="chosen-item"
        v-for="(exercise) in store.currentExercise"
        :key="exercise.id"
    >
      <div class="name">
        {{exercise.name}}
        <div class="icon-area"
             @click="exercise.isSettingsActive = !exercise.isSettingsActive"
        >
          <Icon iconName="plus"/>
        </div>
      </div>
      <div
           class="settings"
           :class="{active: exercise.isSettingsActive}"
      >
        <ModalLoadType/>
        <ModalExerciseSettings />
        <Icon iconName="floppy-disk" @click="exercise.isSettingsActive = !exercise.isSettingsActive"/>
      </div>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/components/UI/Icon"
import ModalLoadType from "@/components/Modal/ModalLoadType"
import ModalExerciseSettings from "@/components/Modal/ModalExerciseSettings"
import { useStore } from "@/store"

const store = useStore()
</script>

<style lang="scss" scoped>
.chosen-list {
  width: 300px;
  border-left: 1px solid var(--c-border);
}

.name {
  font-size: 11px;
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