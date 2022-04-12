<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal-box" v-if="isModalActive">
        <div class="layout" @click="close"></div>
        <div class="modal">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
const props = defineProps({
  isModalActive: { type: Boolean }
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

.modal {
  position: absolute;
  left: 50%; top: 50%;
  width: calc(100vw - 4em);
  max-width: 32em;
  max-height: calc(100vh - 4em);
  overflow: auto;
  transform: translate(-50%,-50%);
  padding: 1em;
  border-radius: 0.2em;
  background: white;
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