<template>
  <div class="inp-wrap">
    <input 
      type="text" 
      v-model="inputValue" 
      :placeholder="placeholder"
      @input="userInput">
  </div>
</template>

<script setup>
const props = defineProps({
  inputValue: { type: String },
  placeholder: { type: String }
})

const emit = defineEmits(["userInput"])

const userInput = () => {
  emit("userInput", props.inputValue)
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    border: 1px solid var(--c-border);
    padding: 16px;
    outline: none;
  }
</style>