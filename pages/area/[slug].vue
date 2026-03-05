<template>
  <div class="section-pad">
    <div class="container-narrow">
      <nav class="mb-6 text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
        <NuxtLink :to="localePath('/')" class="hover:text-[var(--color-aia-red)]">{{ t('nav.home') }}</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink :to="localePath('/area/udon-thani')" class="hover:text-[var(--color-aia-red)]">{{ t('area.navLabel') }}</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-slate-700 dark:text-slate-200">{{ areaName }}</span>
      </nav>
      <h1 class="heading-section mb-6 text-[var(--color-aia-red)]">
        {{ areaHeading }}
      </h1>
      <p class="mb-8 text-lg text-slate-600 dark:text-slate-400">
        {{ areaIntro }}
      </p>
      <div class="rounded-2xl bg-aia-subtle p-6 dark:bg-slate-800/50">
        <NuxtLink :to="localePath('/') + '#lead-form'" class="btn-primary inline-flex">
          {{ t('area.cta') }}
        </NuxtLink>
      </div>
      <p class="mt-8 text-center">
        <NuxtLink :to="localePath('/contact')" class="text-[var(--color-aia-red)] font-medium hover:underline">
          {{ t('contact.title') }} →
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = computed(() => (route.params.slug as string) || '')

interface AreaItem {
  slug: string
  nameTh: string
  nameEn: string
}

const { data: areasData } = await useAsyncData<AreaItem[]>(
  'areas',
  () => import('~/data/areas.json').then(m => m.default as AreaItem[])
)
const areas = computed(() => areasData.value ?? [])

const area = computed(() => areas.find(a => a.slug === slug.value))

const areaName = computed(() => {
  const a = area.value
  if (!a) return slug.value
  return locale.value === 'th' ? a.nameTh : a.nameEn
})

const areaHeading = computed(() => t('area.heading').replace('{name}', areaName.value))
const areaIntro = computed(() => t('area.intro').replace('{name}', areaName.value))

const pageTitle = computed(() => {
  const name = areaName.value
  return locale.value === 'th'
    ? `ตัวแทนประกัน AIA ${name} | สมัครประกันชีวิต ประกันสุขภาพ AIA ภาคอีสาน`
    : `AIA Insurance Advisor ${name} | Northeast Thailand`
})
const pageDescription = computed(() => {
  const name = areaName.value
  return locale.value === 'th'
    ? `ตัวแทน AIA ${name} — ให้บริการปรึกษาประกันชีวิต ประกันสุขภาพ AIA ในพื้นที่${name} และภาคอีสาน เช็คเบี้ยฟรี วางแผนไม่ขายเกินจำเป็น พรปวีณ์ ศรีพิมพ์สอ`
    : `AIA insurance advisor in ${name}, Northeast Thailand. Life & health insurance consultation, free quote. Pornpavee Sripimso.`
})

// 404 when slug not found
if (!area.value) {
  throw createError({ statusCode: 404, statusMessage: 'Area not found' })
}

useSeo({
  title: pageTitle.value,
  description: pageDescription.value,
  path: route.path
})
</script>
