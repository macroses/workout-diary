<template>
  <teleport to="body">
    <Transition name="modal">
      <div
        v-if="isConfirm"
        class="confirm-layer">
        <div class="confirm">
          <div class="content">
            {{title}}
          </div>
          <div class="btn-group">
            <Button
              :accentColor="true"
              @click="dropBoolean(true)">
              Ок
            </Button>
            <Button @click="dropBoolean(false)">Отмена</Button>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import Button from '../../UI/Button.vue';
import TransitionFade from '../../UI/TransitionFade.vue';
import {computed, ref} from "vue";

const props = defineProps({
  isConfirm: Boolean,
  title: String
})

const emit = defineEmits(['dropBoolean']);
const dropBoolean = val => emit('dropBoolean', val)

</script>

<style lang="scss" scoped>
.confirm-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm {
  border-radius: 6px;
  background: var(--c-bg);
  min-width: 300px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);

  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: 0.3s;
}

.content {
  flex: 1 1 auto;
  margin-bottom: 16px;
  font-weight: 600;

  max-width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.btn-group {
  flex: 0 1 auto;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  div {
    flex: 1;
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .confirm,
.modal-leave-to .confirm {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>