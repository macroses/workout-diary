<template>
  <ul class="weekdays">
    <li v-for="item in weekDays" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup>
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс",]
</script>

<style lang="scss" scoped>
.weekdays {
  display: grid;
  list-style: none;
  gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 20px;
  text-align: center;
  li {
    border-right: 1px solid var(--c-border);
    text-transform: uppercase;
    font-size: 11px;
    line-height: 20px;
    &:nth-child(7n) {
      border-right: none;
    }
  }
}
</style>