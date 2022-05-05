<template>
  <div >
    <button @click="prevMonth">prev</button>
    <button @click="nextMonth">next</button>
    {{ month }}
    {{ year }}
  </div>
</template>

<script setup>
import { useStore } from '@/store'
import {computed} from "vue";
import moment from "moment";



const store = useStore();

const nextMonth = () => store.initialDate = moment(store.initialDate).add(1, 'month')
const prevMonth = () => store.initialDate = moment(store.initialDate).subtract(1, 'month')

const month = computed(() => store.initialDate.format('MMMM'))
const year = computed(() => store.initialDate.format('YYYY'))

</script>

<style lang="scss" scoped>
div {
  font-size: 22px;
  font-weight: 500;
  margin-left: 12px;
  color: var(--c-text-dark);
}
</style>