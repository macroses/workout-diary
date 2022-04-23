<template>
  <ul class="chosen-list">
    <li
        class="chosen-item"
        v-for="exercise in store.currentExercise"
        :key="exercise.id"
    >
      <div class="name">
        {{exercise.name}}
        <div class="icon-area">
          <Icon iconName="plus"/>
        </div>
      </div>

      <ModalLoadType />
    </li>
  </ul>
</template>

<script setup>
import {useStore} from "@/store";
import Icon from "@/components/UI/Icon";
import ModalLoadType from "@/components/Modal/ModalLoadType";

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
</style>