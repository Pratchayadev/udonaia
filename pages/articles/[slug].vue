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
            <p
              v-if="hasRichArticleBody"
              class="article-rich-body mt-2 text-slate-600"
              v-html="localizedArticleSectionBody(i)"
            />
            <p v-else class="mt-2 whitespace-pre-line text-slate-600">
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
import { aiaNewHealthStandardBodies } from '~/content/articleBodies/aiaNewHealthStandard'
import { aiaCompanyHistoryAsiaBodies } from '~/content/articleBodies/aiaCompanyHistoryAsia'
import { aiaHealthWorth2026Bodies } from '~/content/articleBodies/aiaHealthWorth2026'
import { whyUdonPrefersAia2026Bodies } from '~/content/articleBodies/whyUdonPrefersAia2026'
import { aiaUdonAdvisorTrust2026Bodies } from '~/content/articleBodies/aiaUdonAdvisorTrust2026'
import { howToChooseAiaHealthPlanBodies } from '~/content/articleBodies/howToChooseAiaHealthPlan'

const { t, locale } = useI18n()
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
    'buy-through-agent-or-self': 'buyThroughAgentOrSelf',
    'aia-lump-sum-guide': 'aiaLumpSumGuide',
    'aia-health-good-2026': 'aiaHealthGood2026',
    'copayment-aia-health': 'copaymentAiaHealth',
    'elderly-health-laos-aia': 'elderlyHealthLaosAia',
    'health-coverage-what': 'healthCoverageWhat',
    'choose-insurance-not-scammed': 'chooseInsuranceNotScammed',
    'aia-new-health-standard': 'aiaNewHealthStandard',
    'aia-company-history-asia': 'aiaCompanyHistoryAsia',
    'aia-health-worth-2026': 'aiaHealthWorth2026',
    'why-udon-prefers-aia-2026': 'whyUdonPrefersAia2026',
    'aia-udon-advisor-trust-2026': 'aiaUdonAdvisorTrust2026',
    'how-to-choose-aia-health-plan': 'howToChooseAiaHealthPlan'
  }
  return map[slug.value] || ''
})

/** บทความที่ sNBody เป็น HTML (b, u, ลิงก์ภายใน) — แปลง href ด้วย localePath */
const articleKeysWithRichHtmlBody = new Set([
  'aiaNewHealthStandard',
  'aiaCompanyHistoryAsia',
  'aiaHealthWorth2026',
  'whyUdonPrefersAia2026',
  'aiaUdonAdvisorTrust2026',
  'howToChooseAiaHealthPlan'
])

const hasRichArticleBody = computed(
  () => articleKey.value && articleKeysWithRichHtmlBody.has(articleKey.value)
)

function localizedArticleSectionBody(sectionIndex: number) {
  const key = articleKey.value
  if (!key || !articleKeysWithRichHtmlBody.has(key)) return ''
  let raw = ''
  if (key === 'aiaNewHealthStandard') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      aiaNewHealthStandardBodies[loc][sectionIndex] ??
      aiaNewHealthStandardBodies.th[sectionIndex] ??
      ''
  } else if (key === 'aiaCompanyHistoryAsia') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      aiaCompanyHistoryAsiaBodies[loc][sectionIndex] ??
      aiaCompanyHistoryAsiaBodies.th[sectionIndex] ??
      ''
  } else if (key === 'aiaHealthWorth2026') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      aiaHealthWorth2026Bodies[loc][sectionIndex] ??
      aiaHealthWorth2026Bodies.th[sectionIndex] ??
      ''
  } else if (key === 'whyUdonPrefersAia2026') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      whyUdonPrefersAia2026Bodies[loc][sectionIndex] ??
      whyUdonPrefersAia2026Bodies.th[sectionIndex] ??
      ''
  } else if (key === 'aiaUdonAdvisorTrust2026') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      aiaUdonAdvisorTrust2026Bodies[loc][sectionIndex] ??
      aiaUdonAdvisorTrust2026Bodies.th[sectionIndex] ??
      ''
  } else if (key === 'howToChooseAiaHealthPlan') {
    const loc = locale.value === 'en' ? 'en' : locale.value === 'lo' ? 'lo' : 'th'
    raw =
      howToChooseAiaHealthPlanBodies[loc][sectionIndex] ??
      howToChooseAiaHealthPlanBodies.th[sectionIndex] ??
      ''
  } else {
    raw = t(`articles.${key}.s${sectionIndex}Body`)
  }
  raw = raw.replace(/href='\/articles\/([^']+)'/g, (_m, slugPath: string) => {
    return `href='${localePath('/articles/' + slugPath)}'`
  })
  raw = raw.replace(/href='\/services'/g, () => `href='${localePath('/services')}'`)
  raw = raw.replace(/href='\/contact'/g, () => `href='${localePath('/contact')}'`)
  return raw
}

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
