<template>
  <div class="exercise-category">
    <ul class="groups">
      <li v-for="part in bodyParts" :key="part.id">
        {{ part.partName }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import Icon from '../UI/Icon.vue';


</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
}

.close {
  background: transparent;
  border: none;
}

</style>