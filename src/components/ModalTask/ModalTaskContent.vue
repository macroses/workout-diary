<template>
  <div class="modal-content">
    <div class="workout-name">{{ filteredItem.userValue }}</div>
    <ul class="exercises-table">
      <li
          v-for="exercise in filteredItem.exercises"
          :key="exercise.id"
          class="exercise-item"
      >
        <div class="name">{{ exercise.name }}</div>
        <div class="sets" v-for="(set, index) in exercise.sets">
          <div class="set num">{{ index + 1 }}</div>
          <div class="set weight">
            <Icon iconName="weight-scale"/>
            {{ set.weight }}
          </div>
          <div class="set repeats">
            <Icon iconName="repeat"/>
            {{ set.repeats }}
          </div>
          <div class="set load">
            <div
                :style="{backgroundColor: set.setType.color}"
                class="load-color"></div>
            <span>{{ set.setType.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Icon from "@/components/UI/Icon";

const props = defineProps({
  filteredItem: Object
})
</script>

<style lang="scss" scoped>
.modal-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}


.workout-name {
  font-size: 22px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
  font-weight: 500;
  color: var(--c-text);
}

.name {
  font-size: 14px;
  margin-top: -11px;
  margin-left: 12px;
  width: max-content;
  padding: 0 4px;
  background-color: var(--c-bg);
  color: var(--c-text-light);
  font-weight: 600;
}

.sets {
  display: grid;
  grid-template-columns: 30px 1fr 1fr 1fr;
  width: 100%;
  font-size: 12px;
  border-radius: 4px;
  color: var(--c-text);

  &:nth-child(odd) {
    background: var(--c-block-hover);
  }
}

.set {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;

  svg {
    width: 14px;
    height: 14px;
    fill: var(--c-text-light);
    margin-right: 8px;
  }
}

.exercise-item {
  margin-bottom: 24px;
  border: 1px solid var(--c-border);
  border-radius: 6px;
}

.load-color {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>