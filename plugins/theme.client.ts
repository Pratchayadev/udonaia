export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    try {
      const stored = localStorage.getItem('theme')
      const isDark = stored === 'dark'
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (_) {}
  }
})
