<template>
  <div >
    {{ initialMonth }}
    {{ initialYear }}
  </div>
</template>

<script setup>
import { initialDates } from "@/helpers/initialDates";

const {initialMonth, initialYear} = initialDates()

</script>

<style lang="scss" scoped>
div {
  font-size: 22px;
  font-weight: 500;
  margin-left: 12px;
  color: var(--c-text-dark);
}
</style>