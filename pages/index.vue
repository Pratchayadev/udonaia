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
              {{ t('hero.headline') }}
            </h1>
            <p class="mt-4 text-lg text-slate-600 sm:text-xl">
              {{ t('hero.subheadline') }}
            </p>
            <p class="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-500 md:justify-start">
              <span>{{ t('about.agentName') }}</span>
              <span class="hidden sm:inline">·</span>
              <img :src="logoAia" alt="AIA" class="h-5 w-auto object-contain opacity-80" />
              <span>{{ t('about.role') }}</span>
            </p>
            <a href="#lead-form" class="btn-primary mt-8 inline-flex text-lg" @click.prevent="scrollToLead">{{ t('hero.cta') }}</a>
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
          <a href="#lead-form" class="btn-secondary" @click.prevent="scrollToLead">{{ t('pain.cta') }}</a>
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
          <a href="#lead-form" class="btn-primary" @click.prevent="scrollToLead">{{ t('solution.cta') }}</a>
        </p>
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

    <!-- Lead Form -->
    <section id="lead-form" class="section-pad bg-[var(--color-modern)] scroll-mt-20 animate-on-scroll">
      <div class="container-narrow max-w-xl">
        <div class="flex flex-col items-center gap-3">
          <img :src="logoAia" alt="AIA" class="h-10 w-auto object-contain opacity-90" />
          <h2 class="heading-section text-center text-[var(--color-aia-red)]">
            {{ t('leadForm.title') }}
          </h2>
        </div>
        <form class="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8" @submit.prevent="onSubmit">
          <div>
            <label class="mb-1 block text-sm font-medium text-slate-700">{{ t('leadForm.name') }}</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-[var(--color-aia-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-aia-red)]"
              required
            />
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1 block text-sm font-medium text-slate-700">{{ t('leadForm.age') }}</label>
              <input
                v-model="form.age"
                type="number"
                min="18"
                max="99"
                class="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-[var(--color-aia-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-aia-red)]"
                required
              />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-slate-700">{{ t('leadForm.job') }}</label>
              <input
                v-model="form.job"
                type="text"
                class="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-[var(--color-aia-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-aia-red)]"
                required
              />
            </div>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-slate-700">{{ t('leadForm.phone') }}</label>
            <input
              v-model="form.phone"
              type="tel"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-[var(--color-aia-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-aia-red)]"
              required
            />
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-slate-700">{{ t('leadForm.lineId') }}</label>
            <input
              v-model="form.lineId"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-[var(--color-aia-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-aia-red)]"
            />
          </div>
          <button type="submit" class="btn-primary w-full">
            {{ t('leadForm.cta') }}
          </button>
          <p class="text-center text-xs text-slate-500">
            {{ t('leadForm.privacy') }}
          </p>
        </form>
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

const form = reactive({
  name: '',
  age: '',
  job: '',
  phone: '',
  lineId: ''
})

function scrollToLead () {
  const el = document.getElementById('lead-form')
  el?.scrollIntoView({ behavior: 'smooth' })
}

function onSubmit () {
  // In production: send to API / Line OA
  const text = `ชื่อ: ${form.name}\nอายุ: ${form.age}\nอาชีพ: ${form.job}\nโทร: ${form.phone}\nLine: ${form.lineId}`
  window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text)}`, '_blank')
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.location.hash === '#lead-form') {
    nextTick(() => scrollToLead())
  }
})
</script>
