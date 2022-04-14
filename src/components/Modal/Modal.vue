<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal-box" v-if="isModalActive">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <div class="modal-header">
            <div class="title">{{ title }} {{dayData.format('D.MM.Y')}}</div>
            <Icon iconName="xmark" @click="close" class="closeIcon"/>
          </div>
          <div class="modal-content">
            <slot name="modalContent"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import Icon from '@/components/UI/Icon'

const props = defineProps({
  isModalActive: { type: Boolean },
  title: { type: String},
  dayData: { type: Object }
})

const emits = defineEmits(['close'])
const close = () => emits('close')

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
}

.closeIcon {
  cursor: pointer;
}

.modal {
  position: absolute;
  left: 50%; 
  top: 50%;
  width: calc(100vw - 4em);
  max-width: 32em;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  padding: 1em;
  border-radius: 0.2em;
  background: white;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>