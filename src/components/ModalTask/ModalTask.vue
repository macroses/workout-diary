<template>
  <teleport to="body">
    <TransitionFade>
      <div class="modal-box" v-if="isOpenTaskModal">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <div class="modal-top">
            <div @click="close" class="icon-wrap">
              <Icon class="closeIcon" iconName="xmark"/>
            </div>
          </div>
          <div class="modal-content">

          </div>
        </div>
      </div>
    </TransitionFade>
  </teleport>
</template>

<script setup>
import TransitionFade from "@/components/UI/TransitionFade"
import Icon from "@/components/UI/Icon";
import { useStore } from "@/store";
import {onMounted} from "vue";

const store = useStore()

const props = defineProps({
  isOpenTaskModal: Boolean,
  taskId: Number
})

onMounted(() => {
  console.log(props.taskId)
})

const emit = defineEmits(['close'])
const close = () => emit('close')

</script>

<style lang="scss" scoped>
.layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
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

  display: flex;
  flex-direction: column;
}

.modal-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.modal-top {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
}

.closeIcon {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

</style>