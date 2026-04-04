<template>
  <div class="section-pad">
    <div class="container-narrow">
      <h1 class="heading-section mb-10 text-center text-[var(--color-aia-red)] animate-on-scroll">
        {{ t('articles.listTitle') }}
      </h1>
      <ul class="grid gap-6 sm:grid-cols-2">
        <li
          v-for="(article, i) in paginatedArticles"
          :key="article.slug"
          class="animate-on-scroll"
          :class="'animate-delay-' + ((i % 3) + 1)"
        >
          <NuxtLink
            :to="localePath(`/articles/${article.slug}`)"
            class="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[var(--color-aia-red)]/30 hover:shadow-md"
          >
            <div class="bg-white">
              <img
                :src="getArticleCover(article.key)"
                :alt="t(`articles.${article.key}.title`)"
                class="h-40 w-full object-cover"
                loading="lazy"
                @error="(e) => { const el = (e.target as HTMLImageElement); if (el) el.src = defaultCover }"
              />
            </div>
            <div class="p-6">
              <p class="text-xs text-slate-500">
                {{ t('articles.listAdded') }} {{ formatAddedAt(article.addedAt) }}
              </p>
              <h2 class="mt-1 text-xl font-bold text-[var(--color-aia-red)]">
                {{ t(`articles.${article.key}.title`) }}
              </h2>
              <p class="mt-2 line-clamp-2 text-slate-600">
                {{ t(`articles.${article.key}.metaDesc`) }}
              </p>
              <span class="mt-4 inline-block text-sm font-medium text-[var(--color-aia-red)]">
                {{ t('nav.consult') }} →
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <nav
        v-if="totalPages > 1"
        class="mt-12 flex flex-wrap items-center justify-center gap-2"
        aria-label="Pagination"
      >
        <button
          type="button"
          class="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          :disabled="currentPage <= 1"
          @click="currentPage = Math.max(1, currentPage - 1)"
        >
          {{ t('articles.listPrev') }}
        </button>
        <span class="px-2 text-sm text-slate-600">
          {{ t('articles.listPageOf', { current: currentPage, total: totalPages }) }}
        </span>
        <button
          type="button"
          class="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          :disabled="currentPage >= totalPages"
          @click="currentPage = Math.min(totalPages, currentPage + 1)"
        >
          {{ t('articles.listNext') }}
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const defaultCover = 'https://img2.pic.in.th/aia-1000x500.webp'
const perPage = 20
const currentPage = ref(1)

function getArticleCover(key: string) {
  const url = t(`articles.${key}.coverImage`)
  return url && String(url).startsWith('http') ? url : defaultCover
}

const localeToBCP = () => (locale.value === 'th' ? 'th-TH' : locale.value === 'lo' ? 'lo-LA' : 'en-US')

function formatAddedAt(addedAt: string) {
  if (!addedAt) return ''
  const d = new Date(addedAt + 'T12:00:00')
  return d.toLocaleDateString(localeToBCP(), {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const articleList: { slug: string; key: string; addedAt: string }[] = [
  { slug: 'aia-new-health-standard', key: 'aiaNewHealthStandard', addedAt: '2026-03-22' },
  { slug: 'aia-company-history-asia', key: 'aiaCompanyHistoryAsia', addedAt: '2026-03-22' },
  { slug: 'aia-health-worth-2026', key: 'aiaHealthWorth2026', addedAt: '2026-03-23' },
  { slug: 'why-udon-prefers-aia-2026', key: 'whyUdonPrefersAia2026', addedAt: '2026-03-23' },
  { slug: 'aia-udon-advisor-trust-2026', key: 'aiaUdonAdvisorTrust2026', addedAt: '2026-03-31' },
  { slug: 'how-to-choose-aia-health-plan', key: 'howToChooseAiaHealthPlan', addedAt: '2026-03-31' },
  { slug: 'hospital-costs-rising-thailand', key: 'hospitalCostsRisingThailand', addedAt: '2026-04-04' },
  { slug: 'aia-lump-sum-guide', key: 'aiaLumpSumGuide', addedAt: '2026-03-19' },
  { slug: 'aia-health-good-2026', key: 'aiaHealthGood2026', addedAt: '2026-03-19' },
  { slug: 'choose-insurance-not-scammed', key: 'chooseInsuranceNotScammed', addedAt: '2026-03-11' },
  { slug: 'health-coverage-what', key: 'healthCoverageWhat', addedAt: '2026-03-11' },
  { slug: 'copayment-aia-health', key: 'copaymentAiaHealth', addedAt: '2026-03-10' },
  { slug: 'elderly-health-laos-aia', key: 'elderlyHealthLaosAia', addedAt: '2026-03-08' },
  { slug: 'health-necessary-2025', key: 'healthNecessary2025', addedAt: '2026-03-07' },
  { slug: 'health-sum', key: 'healthSum', addedAt: '2025-06-01' },
  { slug: 'high-converting', key: 'highConverting', addedAt: '2025-06-01' },
  { slug: 'agent-udon-5-reasons', key: 'agentUdon5Reasons', addedAt: '2025-05-01' },
  { slug: 'hospital-aia-kk-korat', key: 'hospitalAiaKkKorat', addedAt: '2025-05-01' },
  { slug: 'delivery-20-provinces', key: 'delivery20Provinces', addedAt: '2025-04-01' },
  { slug: 'review-aia-health-happy', key: 'reviewAiaHealthHappy', addedAt: '2025-04-01' },
  { slug: 'compare-savings-pension', key: 'compareSavingsPension', addedAt: '2025-03-01' },
  { slug: 'newbie-3-steps', key: 'newbie3Steps', addedAt: '2025-03-01' },
  { slug: 'claim-nongkhai-buengkan', key: 'claimNongkhaiBuengkan', addedAt: '2025-02-01' },
  { slug: 'insure-while-healthy', key: 'insureWhileHealthy', addedAt: '2025-02-01' },
  { slug: 'aia-vitality', key: 'aiaVitality', addedAt: '2025-01-01' },
  { slug: 'aia-partner-benefits', key: 'aiaPartnerBenefits', addedAt: '2025-01-01' },
  { slug: 'aia-health-good', key: 'aiaHealthGood', addedAt: '2025-01-01' },
  { slug: 'agent-udon-free-consult', key: 'agentUdonFreeConsult', addedAt: '2025-01-01' },
  { slug: 'cancer-treatment-cost-thailand', key: 'cancerTreatmentCostThailand', addedAt: '2025-01-01' },
  { slug: 'buy-through-agent-or-self', key: 'buyThroughAgentOrSelf', addedAt: '2025-01-01' }
]

const sortedArticles = computed(() =>
  [...articleList].sort((a, b) => (b.addedAt || '').localeCompare(a.addedAt || ''))
)

const totalPages = computed(() => Math.ceil(sortedArticles.value.length / perPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return sortedArticles.value.slice(start, start + perPage)
})

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
