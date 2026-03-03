<template>
  <Teleport to="body">
    <Transition name="loading-fade">
      <div
        v-if="loading"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      >
        <div class="flex flex-col items-center gap-8">
          <img
            :src="logoAia"
            alt="AIA"
            class="h-16 w-auto animate-pulse object-contain sm:h-20"
          />
          <div class="w-56 overflow-hidden rounded-full bg-slate-200 sm:w-72">
            <div
              class="h-2 rounded-full bg-[var(--color-aia-red)] transition-all duration-300"
              :style="{ width: progress + '%' }"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import logoAia from '~/assets/img/logoaianobg.png'
const { loading } = usePageLoading()
const progress = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

watch(loading, (isLoading) => {
  if (isLoading) {
    progress.value = 0
    let step = 0
    timer = setInterval(() => {
      step += 1
      progress.value = Math.min(20 + step * 15, 95)
      if (step >= 6) {
        if (timer) clearInterval(timer)
        timer = null
      }
    }, 80)
  } else {
    progress.value = 100
    if (timer) clearInterval(timer)
    timer = null
  }
})
</script>

<style scoped>
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.2s ease;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>
