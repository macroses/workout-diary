<template>
  <div class="calendar-layout">
    <ul class="weekdays">
      <li v-for="item in weekDays" :key="item">{{ item }}</li>
    </ul>
    <ul class="days">
      <li v-for="(_, index) in emptyDays" :key="index" ></li>
      <li
          v-for="( day, index ) in days"
          :key="index"
          :class="{ today: checkDateEqually(day) }" >
        <span class="day-num">{{ day.format('D') }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import moment from 'moment'

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс",]

const dayContext = moment()
const currentDate = dayContext.get('date')

const emptyDays = moment(dayContext).subtract((currentDate), 'days').weekday()
const monthDate = dayContext.startOf('month')

const days = [...Array(monthDate.daysInMonth())].map((_, i) => monthDate.clone().add(i, 'day'))

const checkDateEqually = (day) => moment().isSame(day, 'day')
</script>

<style lang="scss" scoped>
.calendar-layout {
  height: calc(100vh - 85px);
  flex: 1 1 auto;
}

.days {
  display: grid;
  list-style: none;
  height: 100%;
  gap: 1px;
  grid-template-columns: repeat(7, 1fr);

  li {
    border-right: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
    text-align: center;

    &:nth-child(7n) {
      border-right: none;
    }
  }
}

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

.today {
  .day-num {
    color: #fff;
    background: var(--c-accent);
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    height: 23px;
    width: 24px;
    border-radius: 50%;
  }
}
</style>