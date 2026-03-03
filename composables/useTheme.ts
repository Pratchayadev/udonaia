const STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

export function useTheme () {
  const theme = ref<Theme>('light')

  const isDark = computed(() => theme.value === 'dark')

  function apply (value: Theme) {
    if (import.meta.client && typeof document !== 'undefined') {
      const root = document.documentElement
      if (value === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }

  function setTheme (value: Theme) {
    theme.value = value
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch (_) {}
      apply(value)
    }
  }

  function init () {
    if (!import.meta.client || typeof document === 'undefined') return
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
      const value = stored === 'dark' || stored === 'light' ? stored : 'light'
      theme.value = value
      apply(value)
    } catch (_) {
      apply('light')
    }
  }

  return { theme, isDark, setTheme, init }
}
