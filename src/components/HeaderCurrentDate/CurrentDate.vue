<template>
  <div class="months">
    <div class="month-nav">
      <div class="nav-item" @click="prevMonth">
        <Icon iconName="angle-left"/>
      </div>
      <div class="nav-item" @click="nextMonth">
        <Icon iconName="angle-right"/>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <div :key="month" class="current-month">
        {{ month }}
        {{ year }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useStore } from '@/store'
import {computed} from "vue";
import moment from "moment";
import Icon from "@/components/UI/Icon";

const store = useStore()

const nextMonth = () => store.initialDate = moment(store.initialDate).add(1, 'month')
const prevMonth = () => store.initialDate = moment(store.initialDate).subtract(1, 'month')

const month = computed(() => store.initialDate.format('MMMM'))
const year = computed(() => store.initialDate.format('YYYY'))

</script>

<style lang="scss" scoped>
.months {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.month-nav {
  display: flex;
  cursor: pointer;
  margin-top: 3px;
}

.nav-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--c-block-hover);
  }

  svg {
    width: 16px;
    height: 16px;
  }
}

.current-month {
  font-size: 22px;
  font-weight: 500;
  margin-left: 12px;
  color: var(--c-text-dark);
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.1s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>