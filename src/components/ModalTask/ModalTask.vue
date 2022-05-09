<template>
  <teleport to="body">
    <TransitionFade>
      <div class="modal-box" v-if="isOpenTaskModal">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <ModalTaskTop
            @closeModal="close"
            @deleteItem="deleteItem"
            :dateExercise="filteredItem.date"
          />
          <ModalTaskContent :filteredItem="filteredItem" />
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
import ModalTaskContent from "@/components/ModalTask/ModalTaskContent";

const store = useStore()

const props = defineProps({
  isOpenTaskModal: Boolean,
  taskId: Number
})

const emit = defineEmits(['close', 'deleteItem'])
const close = () => emit('close')
const deleteItem = () => emit('deleteItem', props.taskId)

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


</style>