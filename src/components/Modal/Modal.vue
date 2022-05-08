<template>
  <teleport to="body">
    <TransitionFade>
      <div class="modal-box" v-if="isModalActive">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <ModalTop
              @close="close"
              @workoutNameToStore="workoutNameToStore"
              :workoutName="workoutName"
              :dayData="dayData"
          />
          <ModalHeader
              @dropNameToStore="workoutNameToStore"
              :isWorkoutName="isWorkoutName"
              v-model="workoutName"
          />
          <div class="modal-content">
            <DropdownColor @dropColor="getTaskColor"/>
            <ModalDayOfWorkoutDesc :dayData="dayData"/>
            <ModalAddExercise/>
          </div>
        </div>
      </div>
    </TransitionFade>
  </teleport>
</template>

<script setup>
import DropdownColor from "@/components/UI/DropdownColor"
import ModalTop from "@/components/Modal/ModalTop"
import { ref } from "vue";
import { vFocusOnLoad } from "@/directives/myDirectives"
import { useStore } from '@/store'
import ModalAddExercise from "@/components/Modal/ModalAddExercise"
import ModalHeader from "@/components/Modal/ModalHeader"
import ModalDayOfWorkoutDesc from "@/components/Modal/ModalDayOfWorkoutDesc";
import TransitionFade from "@/components/UI/TransitionFade";

const props = defineProps({
  isModalActive: Boolean,
  isWorkoutNameActive: Boolean,
  isNewGroupActive: Boolean,
  title: String,
  dayData: Object,
})

const workoutName = ref('')
const isWorkoutName = ref(true)
const currentColor = ref('')

const store = useStore()
const emits = defineEmits(['close'])
const close = () => emits('close')
const getTaskColor = (data) => currentColor.value = data

const workoutNameToStore = () => {
  store.workoutNameToStore(workoutName.value, props.dayData.format('D.MM.Y'))
  workoutName.value = ''
  close()
}
</script>

<style lang="scss" scoped>
.layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //background: rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 20px;
  font-weight: 500;
  span {
    display: inline-block;
    padding: 1px 4px;
    border-radius: 4px;
  }
}

.modal {
  position: absolute;
  left: 50%; 
  top: 50%;
  min-height: 510px;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 24px 38px 3px rgba(0,0,0,.14),
              0 9px 46px 8px rgba(0,0,0,.12),
              0 11px 15px -7px rgba(0,0,0,.2);

  display: flex;
  flex-direction: column;
}

.modal-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

</style>