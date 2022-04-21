<template>
  <ul class="exercises-list">
    <li
        v-for="exercise in exercisesList"
        :key="exercise.id"
    >
      {{ exercise.name }}
    </li>
  </ul>
  {{ groupId }}
  {{exercisesList}}
</template>

<script setup>
import { onMounted, ref } from "vue";
import Exercises from "@/api/api";

const props = defineProps({
  groupId: Number
})

let exercisesList = ref([])


// ?????? под вопросом
onMounted(async () => {
  exercisesList.value = await Exercises.getCurrentExercisesList(props.groupId)
  console.log(exercisesList.value)
})
</script>