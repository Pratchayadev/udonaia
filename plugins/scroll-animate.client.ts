export default defineNuxtPlugin(() => {
  if (import.meta.server) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
  )
  function observe () {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
  }
  observe()
  useRouter().afterEach(() => {
    setTimeout(observe, 100)
  })
})
