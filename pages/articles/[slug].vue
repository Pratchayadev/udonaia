<template>
  <div class="section-pad">
    <div class="container-narrow max-w-3xl">
      <NuxtLink
        :to="localePath('/articles')"
        class="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-aia-red)] hover:underline"
      >
        ← {{ t('articles.backToArticles') }}
      </NuxtLink>
      <article v-if="articleKey" class="animate-on-scroll">
        <h1 class="heading-section mb-8 text-[var(--color-aia-red)]">
          {{ t(`articles.${articleKey}.title`) }}
        </h1>
        <div class="prose prose-slate max-w-none">
          <section
            v-for="i in 7"
            :key="i"
            class="animate-on-scroll mb-8"
            :class="'animate-delay-' + Math.min(i, 5)"
          >
            <h2 class="text-lg font-bold text-slate-800">
              {{ t(`articles.${articleKey}.s${i}Title`) }}
            </h2>
            <p class="mt-2 whitespace-pre-line text-slate-600">
              {{ t(`articles.${articleKey}.s${i}Body`) }}
            </p>
          </section>
        </div>
        <p class="mt-10 text-center">
          <NuxtLink :to="localePath('/') + '#lead-form'" class="btn-primary">
            {{ t('articles.ctaCheckQuote') }}
          </NuxtLink>
        </p>
      </article>
      <p v-else class="text-center text-slate-500">
        {{ $t('articles.backToArticles') }}
        <NuxtLink :to="localePath('/articles')" class="text-[var(--color-aia-red)]">/articles</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const articleKey = computed(() => {
  const map: Record<string, string> = {
    'health-sum': 'healthSum',
    'high-converting': 'highConverting'
  }
  return map[slug.value] || ''
})

const articleTitle = computed(() =>
  articleKey.value ? t(`articles.${articleKey.value}.title`) : t('articles.listTitle')
)
const articleDescription = computed(() =>
  articleKey.value ? t(`articles.${articleKey.value}.metaDesc`) : t('seo.defaultDescription')
)

useHead({
  title: () => articleTitle.value,
  meta: () => [{ name: 'description', content: articleDescription.value }]
})
useSeoMeta({
  ogTitle: () => articleTitle.value,
  ogDescription: () => articleDescription.value
})
</script>
