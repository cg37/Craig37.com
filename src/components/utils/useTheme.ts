import {ref, watchEffect} from 'vue';
import { THEME } from '@/Model/const'
export const storageKey = "___theme___"

const theme = ref<THEME>(localStorage.getItem(storageKey) as THEME ?? THEME.DARK);
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem(storageKey, theme.value)
})
export function useTheme() {
  return {
    theme
  }
}