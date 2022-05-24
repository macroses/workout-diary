<template>
  <ul class="all-workouts">
    <li
        v-for="workout in workouts"
        :key="workout.id"
        class="all-workouts__item"
        @click="toggleModalTask(workout.id)"
    >
      <div class="workout-date">{{ workout.date }}</div>
      <div
          :style="{backgroundColor: `rgb(${workout.color})`}"
          class="workout-color"></div>
      <div class="workout-name">{{ workout.userValue}}</div>
      <ul class="exercises-list">
        <li 
          class="exercises"
          v-for="exercise in workout.exercises"
          :key="exercise.id"
        >
          {{exercise.name}},
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits()
const props = defineProps({
  workouts: {type: Array, required: true}
})

const toggleModalTask = (id) => emit('toggleModalTask', id)
</script>

<style lang="scss" scoped>
.all-workouts {
  margin-bottom: 16px;
}

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
  font-weight: 500;
}

.exercises-list {
  display: flex;
  margin-left: 8px;
  gap: 4px;
}

.exercises {
  font-size: 12px;
  font-style: italic;
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