<template>
  <li v-for="(_, index) in emptyDays" :key="index"></li>
</template>

<script setup>
import moment from "moment";

const dayContext = moment().lang('ru')
const currentDate = dayContext.get('date')

const emptyDays = moment(dayContext).subtract((currentDate), 'days').weekday() + 1
</script>

<style lang="scss" scoped>
li {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
}
</style>