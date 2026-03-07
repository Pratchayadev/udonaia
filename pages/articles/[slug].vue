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
        <img
          v-if="coverImageUrl"
          :src="coverImageUrl"
          :alt="articleTitle"
          class="mb-8 w-full rounded-xl object-cover shadow-md aspect-[1.91/1] max-h-[320px]"
          loading="eager"
        />
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
            <img
              v-if="sectionImageUrl(i)"
              :src="sectionImageUrl(i)"
              :alt="t(`articles.${articleKey}.s${i}Title`)"
              class="my-4 w-full rounded-lg object-cover max-h-[280px]"
              loading="lazy"
            />
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
    'high-converting': 'highConverting',
    'agent-udon-5-reasons': 'agentUdon5Reasons',
    'hospital-aia-kk-korat': 'hospitalAiaKkKorat',
    'delivery-20-provinces': 'delivery20Provinces',
    'review-aia-health-happy': 'reviewAiaHealthHappy',
    'compare-savings-pension': 'compareSavingsPension',
    'newbie-3-steps': 'newbie3Steps',
    'claim-nongkhai-buengkan': 'claimNongkhaiBuengkan',
    'insure-while-healthy': 'insureWhileHealthy',
    'aia-vitality': 'aiaVitality',
    'aia-partner-benefits': 'aiaPartnerBenefits',
    'health-necessary-2025': 'healthNecessary2025',
    'aia-health-good': 'aiaHealthGood',
    'agent-udon-free-consult': 'agentUdonFreeConsult',
    'cancer-treatment-cost-thailand': 'cancerTreatmentCostThailand',
    'buy-through-agent-or-self': 'buyThroughAgentOrSelf'
  }
  return map[slug.value] || ''
})

const articleTitle = computed(() =>
  articleKey.value ? t(`articles.${articleKey.value}.title`) : t('articles.listTitle')
)
const articleDescription = computed(() =>
  articleKey.value ? t(`articles.${articleKey.value}.metaDesc`) : t('seo.defaultDescription')
)

// ภาพหน้าปกจาก locale (ถ้ามี coverImage เป็น URL)
const coverImageUrl = computed(() => {
  if (!articleKey.value) return ''
  const url = t(`articles.${articleKey.value}.coverImage`)
  return url && String(url).startsWith('http') ? url : ''
})

// ภาพในแต่ละ section (s1Image … s7Image)
function sectionImageUrl(sectionIndex: number) {
  if (!articleKey.value) return ''
  const url = t(`articles.${articleKey.value}.s${sectionIndex}Image`)
  return url && String(url).startsWith('http') ? url : ''
}

const articleOgImage = computed(() => coverImageUrl.value || '')

useHead({
  title: () => articleTitle.value,
  meta: () => [{ name: 'description', content: articleDescription.value }]
})
useSeoMeta({
  ogTitle: () => articleTitle.value,
  ogDescription: () => articleDescription.value,
  ogImage: () => (articleOgImage.value ? [articleOgImage.value] : [])
})
</script>
