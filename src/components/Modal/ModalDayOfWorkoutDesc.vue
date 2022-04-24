<template>
  <div
      class="day-of-workout__desc"
      :class="{ today: useDateEquality(dayData) }">
    Дата тренировки:
    <span>
      {{ useDateEquality(dayData) ? "сегодня" : dayData.format('D.MM.Y') }}
    </span>
  </div>
</template>

<script setup>
import { useDateEquality } from "@/composables/useDate";

const props = defineProps({
  dayData: Object
})
</script>

<style lang="scss" scoped>
.day-of-workout__desc {
  font-size: 12px;
  padding: 8px 16px;
  color: var(--c-text-light);
  span {
    color: var(--c-accent);
    font-weight: 600;
  }

  &.today {
    span {
      background: var(--c-accent);
      color: var(--c-bg);
      padding: 0 5px;
      border-radius: 4px;
    }
  }
}
</style>