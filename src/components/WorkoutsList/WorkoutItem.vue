<template>
  <ul class="all-workouts">
    <li
        v-for="workout in workouts"
        :key="workout.id"
        class="all-workouts__item"
    >
      <div class="workout-date">{{ workout.date }}</div>
      <div
          :style="{backgroundColor: `rgb(${workout.color})`}"
          class="workout-color"></div>
      <div class="workout-name">{{ workout.userValue}}</div>
      <div class="exercise-group"></div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  workouts: {type: Array, required: true}
})
</script>

<style lang="scss" scoped>
.all-workouts__item {
  display: flex;
  align-items: center;
  padding: 4px 16px;
  border-bottom: 1px solid var(--c-border);
}

.workout-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 16px;
}

.workout-date {
  font-size: 14px;
  width: 80px;
  color: var(--c-text-light);
}

.workout-name {
  padding: 8px 0;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>