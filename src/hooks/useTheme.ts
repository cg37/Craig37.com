import { ref } from 'vue';
import { THEME } from '@/Model/const'
const theme = ref(THEME.LIGHT);

export function useTheme() {
  return {
    theme
  }
}