<template>
  <div class="min-w-0 overflow-x-hidden">
    <!-- Hero -->
    <section class="section-pad bg-white animate-on-scroll">
      <div class="container-wide">
        <div class="flex min-w-0 flex-col items-center gap-8 md:flex-row md:gap-12">
          <div class="flex-shrink-0">
            <img
              :src="agentImg"
              :alt="t('about.agentName')"
              class="h-56 w-56 rounded-2xl object-cover object-top shadow-lg sm:h-64 sm:w-64 md:h-80 md:w-80"
            />
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="heading-hero text-[var(--color-aia-red)]">
              <i18n-t keypath="hero.headline" tag="span">
                <template #kwHealth>
                  <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
                </template>
                <template #kwHeroAdvisor>
                  <SeoKeywordLink keyword="heroAdvisor" :to="seoLinks.agentUdon" />
                </template>
              </i18n-t>
            </h1>
            <p class="mt-4 text-lg text-slate-600 sm:text-xl">
              <i18n-t keypath="hero.subheadline" tag="span">
                <template #kwPlan>
                  <SeoKeywordLink keyword="plan" :to="seoLinks.services" />
                </template>
                <template #kwMedical>
                  <SeoKeywordLink keyword="medicalCosts" :to="seoLinks.healthCoverage" />
                </template>
                <template #kwProvince>
                  <SeoKeywordLink keyword="udonProvince" :to="seoLinks.agentUdon" />
                </template>
              </i18n-t>
            </p>
            <p class="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-500 md:justify-start">
              <span>{{ t('about.agentName') }}</span>
              <span class="hidden sm:inline">·</span>
              <img :src="logoAia" alt="AIA" class="h-5 w-auto object-contain opacity-80" />
              <span>{{ t('about.role') }}</span>
            </p>
            <div class="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <NuxtLink :to="localePath('/contact')" class="btn-primary inline-flex justify-center text-lg">
                {{ t('hero.cta') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="btn-secondary inline-flex justify-center text-lg">
                {{ t('hero.ctaSecondary') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain -->
    <section class="section-pad bg-white animate-on-scroll">
      <div class="container-narrow">
        <h2 class="heading-section mb-8 text-center text-[var(--color-aia-red)]">
          {{ t('pain.title') }}
        </h2>
        <ul class="space-y-4 text-slate-700">
          <li class="flex gap-3 rounded-xl border border-slate-200 bg-aia-subtle px-4 py-3">
            <span class="text-[var(--color-aia-red)]">•</span>
            {{ t('pain.point1') }}
          </li>
          <li class="flex gap-3 rounded-xl border border-slate-200 bg-aia-subtle px-4 py-3">
            <span class="text-[var(--color-aia-red)]">•</span>
            {{ t('pain.point2') }}
          </li>
          <li class="flex gap-3 rounded-xl border border-slate-200 bg-aia-subtle px-4 py-3">
            <span class="text-[var(--color-aia-red)]">•</span>
            {{ t('pain.point3') }}
          </li>
        </ul>
        <p class="mt-8 text-center text-lg font-medium text-[var(--color-aia-red)]">
          {{ t('pain.close') }}
        </p>
        <p class="mt-4 text-center">
          <NuxtLink :to="localePath('/contact')" class="btn-secondary">{{ t('pain.cta') }}</NuxtLink>
        </p>
      </div>
    </section>

    <!-- Solution -->
    <section class="section-pad bg-[var(--color-modern)] animate-on-scroll">
      <div class="container-narrow">
        <h2 class="heading-section mb-10 text-center text-[var(--color-aia-red)]">
          {{ t('solution.title') }}
        </h2>
        <ul class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="(item, i) in solutionItems"
            :key="i"
            class="flex gap-3 rounded-xl bg-white p-5 shadow-sm"
          >
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-aia-red)] text-sm font-bold text-white">
              {{ i + 1 }}
            </span>
            <span class="text-slate-700">{{ item }}</span>
          </li>
        </ul>
        <p class="mt-10 text-center">
          <NuxtLink :to="localePath('/contact')" class="btn-primary">{{ t('solution.cta') }}</NuxtLink>
        </p>
      </div>
    </section>

    <!-- Editorial SEO: H2 structure + keywords (th: ประกันสุขภาพ AIA, AIA อุดรธานี) -->
    <section class="section-pad bg-white animate-on-scroll" aria-label="AIA health insurance Udon Thani">
      <div class="container-narrow">
        <article class="space-y-12">
          <div>
            <h2 id="home-why-aia-health" class="heading-section mb-4 text-[var(--color-aia-red)]">
              <i18n-t keypath="homeContent.whyTitle" tag="span">
                <template #kwHealth>
                  <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
                </template>
              </i18n-t>
            </h2>
            <p class="leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.whyP1" tag="span">
                <template #kwHealth>
                  <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
                </template>
              </i18n-t>
            </p>
            <p class="mt-4 leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.whyP2" tag="span">
                <template #kwHealth>
                  <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
                </template>
                <template #kwHospitals>
                  <SeoKeywordLink keyword="topHospitals" :to="seoLinks.hospitalPartners" />
                </template>
              </i18n-t>
            </p>
          </div>
          <div>
            <h2 id="home-aia-udon-service" class="heading-section mb-4 text-[var(--color-aia-red)]">
              <i18n-t keypath="homeContent.udonTitle" tag="span">
                <template #kwAiaUdon>
                  <SeoKeywordLink keyword="aiaUdon" :to="seoLinks.agentUdon" />
                </template>
              </i18n-t>
            </h2>
            <p class="leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.udonP1" tag="span">
                <template #kwProvince>
                  <SeoKeywordLink keyword="udonProvince" :to="seoLinks.agentUdon" />
                </template>
                <template #kwAgent>
                  <SeoKeywordLink keyword="agentAiaUdon" :to="seoLinks.agentUdon" />
                </template>
              </i18n-t>
            </p>
            <p class="mt-4 leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.udonP2" tag="span">
                <template #kwAiaUdon>
                  <SeoKeywordLink keyword="aiaUdon" :to="seoLinks.agentUdon" />
                </template>
                <template #kwClaims>
                  <SeoKeywordLink keyword="claims" :to="seoLinks.claimsGuide" />
                </template>
              </i18n-t>
            </p>
          </div>
          <div>
            <h2 id="home-plan-health" class="heading-section mb-4 text-[var(--color-aia-red)]">
              <i18n-t keypath="homeContent.planTitle" tag="span">
                <template #kwHealthOnly>
                  <SeoKeywordLink keyword="healthOnly" :to="seoLinks.healthCoverage" />
                </template>
              </i18n-t>
            </h2>
            <p class="leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.planP1" tag="span">
                <template #kwHealthOnly>
                  <SeoKeywordLink keyword="healthOnly" :to="seoLinks.healthCoverage" />
                </template>
                <template #kwBenefit>
                  <SeoKeywordLink keyword="benefitLimit" :to="seoLinks.healthSum" />
                </template>
              </i18n-t>
            </p>
            <p class="mt-4 leading-relaxed text-slate-700">
              <i18n-t keypath="homeContent.planP2" tag="span">
                <template #kwHealth>
                  <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
                </template>
              </i18n-t>
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="section-pad bg-white animate-on-scroll">
      <div class="container-narrow">
        <h2 class="heading-section mb-8 text-center text-[var(--color-aia-red)]">
          {{ t('socialProof.title') }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-3">
          <blockquote
            v-for="(review, i) in reviews"
            :key="i"
            class="rounded-xl border border-slate-200 bg-slate-50/50 p-5 text-slate-700"
          >
            <p class="italic">"{{ review }}"</p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-pad bg-[var(--color-modern)] animate-on-scroll">
      <div class="container-narrow max-w-xl">
        <div class="flex flex-col items-center gap-3">
          <img :src="logoAia" alt="AIA" class="h-10 w-auto object-contain opacity-90" />
          <h2 class="heading-section text-center text-[var(--color-aia-red)]">
            {{ t('contact.title') }}
          </h2>
        </div>
        <p class="mt-3 text-center text-slate-600">{{ t('contact.message') }}</p>
        <div class="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <a
            href="https://lin.ee/LfV048B"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <img
              src="/line/M_gainfriends_2dbarcodes_BW.png"
              alt="Line QR Code - Add Friend"
              class="h-40 w-40 object-contain"
            />
            <span class="text-sm font-medium text-slate-700">{{ t('contact.line') }} — สแกนเพิ่มเพื่อน</span>
          </a>
          <a
            href="https://lin.ee/LfV048B"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C755] text-white">
              <span class="text-lg font-bold">L</span>
            </span>
            <div>
              <p class="text-sm text-slate-500">{{ t('contact.line') }}</p>
              <p class="font-semibold text-slate-800">@226lroey</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/udonaia/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </span>
            <div>
              <p class="text-sm text-slate-500">{{ t('contact.facebook') }}</p>
              <p class="font-semibold text-slate-800">udonaia</p>
            </div>
          </a>
          <p class="text-center">
            <NuxtLink :to="localePath('/contact')" class="btn-primary inline-flex">
              {{ t('nav.consult') }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <!-- Trust + closing CTA (SEO footer block) -->
    <section class="section-pad animate-on-scroll border-t border-slate-200 bg-white">
      <div class="container-narrow">
        <h2 class="heading-section mb-4 text-center text-[var(--color-aia-red)]">
          <i18n-t keypath="homeContent.trustTitle" tag="span">
            <template #kwHealth>
              <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
            </template>
            <template #kwLife>
              <SeoKeywordLink keyword="life" :to="seoLinks.services" />
            </template>
            <template #kwProvince>
              <SeoKeywordLink keyword="udonProvince" :to="seoLinks.agentUdon" />
            </template>
          </i18n-t>
        </h2>
        <p class="mx-auto max-w-2xl text-center leading-relaxed text-slate-700">
          <i18n-t keypath="homeContent.trustShort" tag="span">
            <template #kwHealth>
              <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
            </template>
            <template #kwLife>
              <SeoKeywordLink keyword="life" :to="seoLinks.services" />
            </template>
            <template #kwAiaUdon>
              <SeoKeywordLink keyword="aiaUdon" :to="seoLinks.agentUdon" />
            </template>
          </i18n-t>
        </p>
        <p class="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-600">
          <i18n-t keypath="homeContent.trustInternal" tag="span">
            <template #kwHealth>
              <SeoKeywordLink keyword="healthAia" :to="seoLinks.healthAia" />
            </template>
            <template #kwAiaUdon>
              <SeoKeywordLink keyword="aiaUdon" :to="seoLinks.agentUdon" />
            </template>
            <template #kwProvince>
              <SeoKeywordLink keyword="udonProvince" :to="seoLinks.agentUdon" />
            </template>
            <template #kwContact>
              <SeoKeywordLink keyword="contactUs" :to="seoLinks.contact" />
            </template>
          </i18n-t>
        </p>
        <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <NuxtLink :to="localePath('/contact')" class="btn-primary inline-flex justify-center">
            {{ t('homeContent.trustCta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn-secondary inline-flex justify-center">
            {{ t('homeContent.trustCtaSecondary') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-pad bg-white animate-on-scroll">
      <div class="container-narrow max-w-2xl">
        <h2 class="heading-section mb-8 text-center text-[var(--color-aia-red)]">
          {{ t('faq.title') }}
        </h2>
        <dl class="space-y-4">
          <div class="rounded-xl border border-slate-200 bg-slate-50/30 p-4">
            <dt class="font-semibold text-slate-800">{{ t('faq.q1') }}</dt>
            <dd class="mt-1 text-slate-600">{{ t('faq.a1') }}</dd>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50/30 p-4">
            <dt class="font-semibold text-slate-800">{{ t('faq.q2') }}</dt>
            <dd class="mt-1 text-slate-600">{{ t('faq.a2') }}</dd>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50/30 p-4">
            <dt class="font-semibold text-slate-800">{{ t('faq.q3') }}</dt>
            <dd class="mt-1 text-slate-600">{{ t('faq.a3') }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import agentImg from '~/assets/img/profile.png'
import logoAia from '~/assets/img/logoaianobg.png'
const { t } = useI18n()
const localePath = useLocalePath()

/** Internal targets for home keyword links (locale prefix added by SeoKeywordLink) */
const seoLinks = {
  healthAia: '/articles/aia-health-good-2026',
  agentUdon: '/articles/agent-udon-free-consult',
  healthCoverage: '/articles/health-coverage-what',
  hospitalPartners: '/articles/hospital-aia-kk-korat',
  claimsGuide: '/articles/claim-nongkhai-buengkan',
  healthSum: '/articles/health-sum',
  services: '/services',
  contact: '/contact',
} as const

const solutionItems = computed(() => [
  t('solution.item1'),
  t('solution.item2'),
  t('solution.item3'),
  t('solution.item4')
])

const reviews = computed(() => [
  t('socialProof.review1'),
  t('socialProof.review2'),
  t('socialProof.review3')
])

useSeo({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
})

useHead({
  titleTemplate: '%s',
})

</script>
