<template>
  <div class="section-pad">
    <div class="container-narrow">
      <h1 class="heading-section mb-10 text-center text-[var(--color-aia-red)] animate-on-scroll">
        {{ t('articles.listTitle') }}
      </h1>
      <ul class="grid gap-6 sm:grid-cols-2">
        <li
          v-for="(article, i) in articleList"
          :key="article.slug"
          class="animate-on-scroll"
          :class="'animate-delay-' + ((i % 3) + 1)"
        >
          <NuxtLink
            :to="localePath(`/articles/${article.slug}`)"
            class="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[var(--color-aia-red)]/30 hover:shadow-md"
          >
            <h2 class="text-xl font-bold text-[var(--color-aia-red)]">
              {{ t(`articles.${article.key}.title`) }}
            </h2>
            <p class="mt-2 line-clamp-2 text-slate-600">
              {{ t(`articles.${article.key}.metaDesc`) }}
            </p>
            <span class="mt-4 inline-block text-sm font-medium text-[var(--color-aia-red)]">
              {{ t('nav.consult') }} →
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const articleList = [
  { slug: 'health-sum', key: 'healthSum' },
  { slug: 'high-converting', key: 'highConverting' }
]

useHead({
  title: () => t('articles.listTitle'),
  meta: [
    {
      name: 'description',
      content: () =>
        t('seo.defaultDescription')
    }
  ]
})
</script>
