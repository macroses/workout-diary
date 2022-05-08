<template>
  <teleport to="body">
    <TransitionFade>
      <div class="modal-box" v-if="isOpenTaskModal">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <ModalTaskTop
            @closeModal="close"
            :dateExercise="filteredItem.date"
            />
          <div class="modal-content">
            <div class="workout-name">{{ filteredItem.userValue }}</div>
            <div class="exercises-table">
              <div
                  v-for="exercise in filteredItem.exercises"
                  :key="exercise.id"
                  class="exercise-item"
              >
                <div class="name">{{ exercise.name }}</div>
                <div class="sets" v-for="set in exercise.sets">
                  <div class="set weight">{{ set.weight }}</div>
                  <div class="set repeats">{{ set.repeats }}</div>
                  <div class="set load">{{ set.setType.color }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionFade>
  </teleport>
</template>

<script setup>
import TransitionFade from "@/components/UI/TransitionFade"
import ModalTaskTop from '@/components/ModalTask/ModalTaskTop'
import { useStore } from "@/store";
import {computed} from "vue";

const store = useStore()

const props = defineProps({
  isOpenTaskModal: Boolean,
  taskId: Number
})

const emit = defineEmits(['close'])
const close = () => emit('close')

const filteredItem = computed(() => store.readExerciseById(props.taskId))
</script>

<style lang="scss" scoped>
.layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  background: white;
  border-radius: 8px;
  min-width: 500px;

  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 38px 3px rgba(0,0,0,.14),
              0 9px 46px 8px rgba(0,0,0,.12),
              0 11px 15px -7px rgba(0,0,0,.2);
}

.modal-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}


.workout-name {
  font-size: 22px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
  font-weight: 500;
}

.name {
  font-size: 14px;
  margin-bottom: 8px;
}

.sets {
  display: flex;
  width: 100%;
  font-size: 12px;
  margin-bottom: 8px;
  padding: 4px 0;
  border-radius: 4px;

  &:nth-child(odd) {
    background: var(--c-block-hover);
  }
}

.set {
  flex: 1;
  text-align: center;
  font-weight: 600;
}
</style>