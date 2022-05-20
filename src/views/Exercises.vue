<template>
  <div class="workouts">
    <div
        v-if="!mockArr.length"
        class="default-message">
      Добавьте хотя бы одну
      <router-link to="/">тренировку</router-link>
    </div>
    <ul
        v-else
        class="all-workouts">
      <li
          v-for="workout in mockArr"
          class="all-workouts__item"
      >
        <div class="workout-date">{{ workout.date }}</div>
        <div
            :style="{backgroundColor: `rgb(${workout.color})`}"
            class="workout-color"></div>
        <div class="workout-name">{{ workout.userValue}}</div>
      </li>
    </ul>

    <Paginate
        :page-count="20"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
    >
    </Paginate>
  </div>

</template>

<script setup>
import { useStore } from '@/store'
import Paginate from "vuejs-paginate-next";


const store = useStore()

const mockArr = [{"id":951796781110,"userValue":"цукцук","color":"11, 128, 67","date":"1.05.2022","exercises":[]},{"id":1094761981815,"userValue":"цук","color":"11, 128, 67","date":"2.05.2022","exercises":[]},{"id":1363082335459,"userValue":"цукцукцук","color":"11, 128, 67","date":"3.05.2022","exercises":[]},{"id":1446864917605,"userValue":"цук","color":"11, 128, 67","date":"4.05.2022","exercises":[]},{"id":807210324429,"userValue":"цукцук","color":"11, 128, 67","date":"5.05.2022","exercises":[]},{"id":1275669384791,"userValue":"вап55","color":"11, 128, 67","date":"6.05.2022","exercises":[]},{"id":45279924108,"userValue":"5345","color":"11, 128, 67","date":"7.05.2022","exercises":[]},{"id":289699689188,"userValue":"353535","color":"11, 128, 67","date":"8.05.2022","exercises":[]},{"id":259640415175,"userValue":"35","color":"11, 128, 67","date":"9.05.2022","exercises":[]},{"id":899472492250,"userValue":"33а","color":"11, 128, 67","date":"10.05.2022","exercises":[]},{"id":1268129919948,"userValue":"5","color":"11, 128, 67","date":"11.05.2022","exercises":[]},{"id":803253594387,"userValue":"вап","color":"11, 128, 67","date":"12.05.2022","exercises":[]},{"id":316851031261,"userValue":"укеук","color":"11, 128, 67","date":"13.05.2022","exercises":[]},{"id":1136310902054,"userValue":"укеуке","color":"11, 128, 67","date":"14.05.2022","exercises":[]},{"id":1336539560051,"userValue":"укеуке","color":"11, 128, 67","date":"15.05.2022","exercises":[]},{"id":1449125354033,"userValue":"вапвап","color":"11, 128, 67","date":"16.05.2022","exercises":[]},{"id":23446658241,"userValue":"цукцук","color":"11, 128, 67","date":"17.05.2022","exercises":[]},{"id":498505436051,"userValue":"впывапа","color":"11, 128, 67","date":"18.05.2022","exercises":[]},{"id":1144830953888,"userValue":"цукцук","color":"11, 128, 67","date":"19.05.2022","exercises":[]},{"id":823212705508,"userValue":"цу","color":"11, 128, 67","date":"20.05.2022","exercises":[]},{"id":904427989258,"userValue":"цукцукцук","color":"11, 128, 67","date":"21.05.2022","exercises":[]},{"id":845074846893,"userValue":"смчсм ч мч см","color":"11, 128, 67","date":"22.05.2022","exercises":[]}]

const clickCallback = () => {

}
</script>

<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

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