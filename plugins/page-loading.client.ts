export default defineNuxtPlugin((nuxtApp) => {
  const { start, finish } = usePageLoading()
  const router = useRouter()
  router.beforeEach(() => { start() })
  router.afterEach(() => {
    setTimeout(() => finish(), 450)
  })
})
