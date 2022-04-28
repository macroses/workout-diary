<template>
  <teleport to="body">
    <div 
      v-if="isConfirm"
      class="confirm-layer">
      <div class="confirm">
        <div class="content">
          удалить {{title}} ?
        </div>
        <div class="btn-group">
          <Button :accentColor="true" @click="dropBoolean(true)">Ок</Button>
          <Button @click="dropBoolean(false)">Отмена</Button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import Button from '../../UI/Button.vue';

const props = defineProps({
  isConfirm: Boolean,
  title: String
})

const emit = defineEmits('dropBoolean');
const dropBoolean = (val) => emit('dropBoolean', val)

</script>

<style lang="scss" scoped>
.confirm-layer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

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
}

.content {
  flex: 1 1 auto;
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
</style>