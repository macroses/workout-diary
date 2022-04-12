import {onMounted, ref} from 'vue'

export function useMenu() {
  const open = ref(false)

  onMounted(() => {
    if(localStorage.getItem('isMenuOpened') === "1") {
      open.value = true;
    }
  })
  
  const toggleOpen = () => {
    open.value = !open.value
    localStorage.setItem('isMenuOpened', Number(open.value))
  }

  return [open, toggleOpen]
}