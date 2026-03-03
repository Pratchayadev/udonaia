<template>
  <div class="section-pad">
    <div class="container-narrow">
      <h1 class="heading-section mb-10 text-center text-[var(--color-aia-red)]">
        {{ t('services.title') }}
      </h1>
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="(svc, key) in services"
          :key="key"
          class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h2 class="text-xl font-bold text-[var(--color-aia-red)]">{{ svc.title }}</h2>
          <p class="mt-2 flex-1 text-slate-600">{{ svc.desc }}</p>
          <NuxtLink :to="localePath('/') + '#lead-form'" class="btn-secondary mt-4 w-full justify-center sm:w-auto">
            {{ svc.cta }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const services = computed(() => ({
  health: {
    title: t('services.health.title'),
    desc: t('services.health.desc'),
    cta: t('services.health.cta')
  },
  life: {
    title: t('services.life.title'),
    desc: t('services.life.desc'),
    cta: t('services.life.cta')
  },
  tax: {
    title: t('services.tax.title'),
    desc: t('services.tax.desc'),
    cta: t('services.tax.cta')
  },
  child: {
    title: t('services.child.title'),
    desc: t('services.child.desc'),
    cta: t('services.child.cta')
  }
}))

</script>
