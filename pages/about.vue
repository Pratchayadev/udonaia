<template>
  <div class="section-pad">
    <div class="container-narrow max-w-2xl">
      <h1 class="heading-section mb-8 text-[var(--color-aia-red)]">
        {{ t('about.title') }}
      </h1>
      <div class="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-start">
          <div class="flex justify-center bg-slate-50 p-6 sm:w-72 sm:flex-shrink-0 sm:flex-col sm:items-center">
            <img
              :src="agentImg"
              :alt="t('about.agentName')"
              class="h-52 w-52 rounded-xl object-cover object-top shadow-md sm:h-64 sm:w-64 md:h-72 md:w-72"
            />
          </div>
          <div class="space-y-6 p-6 sm:p-8">
            <div>
              <p class="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                <img :src="logoAia" alt="AIA" class="h-5 w-auto object-contain" />
                {{ t('about.role') }}
              </p>
              <p class="mt-1 text-2xl font-bold text-[var(--color-aia-red)]">{{ t('about.agentName') }}</p>
            </div>
            <div>
              <p class="text-sm text-slate-500">{{ t('about.license') }}</p>
              <p class="mt-0.5 text-slate-700">ตามที่กฎหมายกำหนด</p>
            </div>
            <div>
              <p class="text-sm text-slate-500">{{ t('about.experience') }}</p>
              <p class="mt-0.5 text-slate-700">ให้คำปรึกษาประกันชีวิตและสุขภาพ</p>
            </div>
            <blockquote class="border-l-4 border-[var(--color-aia-red)] bg-aia-subtle py-2 pl-4 pr-2 text-lg font-medium text-slate-800">
              {{ t('about.philosophy') }}
            </blockquote>
          </div>
        </div>
      </div>
      <p class="mt-10 text-center">
        <NuxtLink :to="localePath('/') + '#lead-form'" class="btn-primary">
          {{ t('hero.cta') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import agentImg from '~/assets/img/profile.png'
import logoAia from '~/assets/img/logoaianobg.png'
const { t } = useI18n()
const localePath = useLocalePath()
</script>
