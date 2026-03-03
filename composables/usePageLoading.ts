export function usePageLoading () {
  const loading = useState<boolean>('page-loading', () => false)
  return {
    loading,
    start: () => { loading.value = true },
    finish: () => { loading.value = false }
  }
}
