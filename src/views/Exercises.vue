<template>
  <div
      v-if="!store.userWorkout.length"
      class="default-message">
    Добавьте хотя бы одну
    <router-link to="/">тренировку</router-link>
  </div>
  <ul
      v-else
      class="all-workouts">
    <li
      v-for="workout in store.userWorkout"
      class="all-workouts__item"
    >
      <div class="workout-date">{{ workout.date }}</div>
      <div
        :style="{backgroundColor: `rgb(${workout.color})`}"
        class="workout-color"></div>
      <div class="workout-name">{{ workout.userValue}}</div>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from '@/store'

const store = useStore()


</script>

<style lang="scss" scoped>
.all-workouts {
  flex: 1 1 auto;
}

.default-message {
  margin-top: 32px;
  font-weight: 600;
  flex: 1 1 auto;
  font-size: 20px;
  text-align: center;
  a {
    color: var(--c-accent);
  }
}

.all-workouts__item {
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--c-border);
}

.workout-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.workout-date {
  font-size: 18px;
  color: var(--c-text-light);
}

.workout-name {
  padding: 8px 0;
}
</style>