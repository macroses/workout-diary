import { onMounted, ref } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  onMounted(() => {
    if(localStorage.getItem('isDark') === "1") {
      isDark.value = true;
      document.body.classList.add('dark')
    }
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.body.classList.toggle('dark')
    localStorage.setItem('isDark', Number(isDark.value))
  }

  return [isDark, toggleTheme]
}