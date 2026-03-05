<template>
  <div class="section-pad">
    <div class="container-narrow max-w-xl">
      <h1 class="heading-section mb-4 text-[var(--color-aia-red)]">
        {{ t('contact.title') }}
      </h1>
      <p class="text-lg text-slate-600">
        {{ t('contact.message') }}
      </p>
      <div class="mt-10 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
        <!-- <a
          href="tel:0800000000"
          class="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-aia-red)] text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" /></svg>
          </span>
          <div>
            <p class="text-sm text-slate-500">{{ t('contact.phone') }}</p>
            <p class="font-semibold text-slate-800">080-000-0000</p>
          </div>
        </a> -->
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
          href="#"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </span>
          <div>
            <p class="text-sm text-slate-500">{{ t('contact.facebook') }}</p>
            <p class="font-semibold text-slate-800">Facebook Page</p>
          </div>
        </a>
      </div>
      <p class="mt-8 text-center">
        <NuxtLink :to="localePath('/') + '#lead-form'" class="btn-primary">
          {{ t('leadForm.cta') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
