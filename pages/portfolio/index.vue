<template>
  <div class="section-pad">
    <div class="container-narrow">
      <h1 class="heading-section mb-10 text-center text-[var(--color-aia-red)] animate-on-scroll">
        {{ t('portfolio.title') }}
      </h1>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        <button
          v-for="(item, i) in items"
          :key="item.id"
          type="button"
          class="group animate-on-scroll text-left"
          :class="'animate-delay-' + ((i % 3) + 1)"
          @click="openModal(item)"
        >
          <div class="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition group-hover:border-[var(--color-aia-red)]/40 group-hover:shadow-md">
            <img
              :src="item.imageUrl"
              :alt="itemTitle(item)"
              class="h-full w-full object-cover transition group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <p class="mt-2 line-clamp-2 text-sm font-medium text-slate-700">
            {{ itemTitle(item) }}
          </p>
        </button>
      </div>
    </div>

    <!-- Modal: lightbox -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selected"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          :aria-label="itemTitle(selected)"
        >
          <div
            class="absolute inset-0 bg-black/70"
            aria-hidden="true"
            @click="closeModal"
          />
          <div class="relative max-h-[90vh] max-w-4xl">
            <button
              type="button"
              class="absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg transition hover:bg-slate-100 md:-right-4 md:-top-4"
              aria-label="Close"
              @click="closeModal"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              :src="selected.imageUrl"
              :alt="itemTitle(selected)"
              class="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
              @click.stop
            />
            <p class="mt-3 text-center text-sm font-medium text-white drop-shadow">
              {{ itemTitle(selected) }}
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

interface PortfolioItem {
  id: string
  title: { th: string; en: string; lo: string }
  imageUrl: string
}

const { data: portfolioData } = await useAsyncData<PortfolioItem[]>(
  'portfolio',
  () => import('~/data/portfolio.json').then(m => m.default as PortfolioItem[])
)
const items = computed(() => portfolioData.value ?? [])

function itemTitle (item: PortfolioItem) {
  const lang = locale.value as 'th' | 'en' | 'lo'
  return item?.title?.[lang] ?? item?.title?.th ?? ''
}

const selected = ref<PortfolioItem | null>(null)

function openModal (item: PortfolioItem) {
  selected.value = item
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

function closeModal () {
  selected.value = null
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

function onKeydown (e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', onKeydown)
  }
})
onUnmounted(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})

useHead({
  title: () => t('portfolio.title'),
  meta: [
    { name: 'description', content: () => t('portfolio.metaDesc') }
  ]
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
