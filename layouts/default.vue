<template>
  <div class="min-h-screen flex min-w-0 flex-col bg-[var(--color-clean)] transition-colors">
    <header class="sticky top-0 z-50 min-w-0 shrink-0 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-700/80 dark:bg-slate-900/95">
      <div class="container-wide flex h-14 min-h-[3.5rem] min-w-0 items-center justify-between gap-2 overflow-visible sm:h-16">
        <NuxtLink :to="localePath('/')" class="flex min-w-0 max-w-[calc(100%-3.5rem)] shrink items-center gap-2 font-semibold text-[var(--color-aia-red)]">
          <img :src="logoAia" alt="AIA" class="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8" />
          <span class="hidden truncate text-slate-600 dark:text-slate-300 md:inline">| {{ t('footer.agent') }}</span>
        </NuxtLink>

        <!-- Desktop nav: แสดงเฉพาะ md ขึ้นไป -->
        <nav class="hidden md:flex md:items-center md:gap-1 md:gap-3">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="localePath(item.to)"
            :class="[
              'rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-red-50 hover:text-[var(--color-aia-red)] dark:hover:bg-red-950/40',
              isActive(item.to) ? '!bg-red-50 !text-[var(--color-aia-red)] dark:!bg-red-950/40' : 'text-slate-600 dark:text-slate-300'
            ]"
          >
            {{ item.label }}
          </NuxtLink>
          <!-- Theme toggle -->
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50 text-slate-600 transition hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700"
            :aria-label="isDark ? t('theme.switchToLight') : t('theme.switchToDark')"
            @click="toggleTheme"
          >
            <span v-if="isDark" class="sr-only">{{ t('theme.switchToLight') }}</span>
            <span v-else class="sr-only">{{ t('theme.switchToDark') }}</span>
            <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
          <div class="flex items-center gap-0.5 rounded-lg border border-slate-200 bg-slate-50/50 p-0.5 dark:border-slate-600 dark:bg-slate-800/50">
            <NuxtLink
              v-for="loc in availableLocales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              @click="setLocale(loc.code)"
              :class="[
                'flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition',
                locale === loc.code
                  ? 'bg-[var(--color-aia-red)] text-white'
                  : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              ]"
            >
              <span class="text-base leading-none">{{ loc.flag }}</span>
              <span class="sm:inline">{{ loc.name }}</span>
            </NuxtLink>
          </div>
          <NuxtLink
            :to="localePath('/') + '#lead-form'"
            class="btn-primary ml-1 text-sm"
            @click="scrollToLead"
          >
            {{ t('nav.consult') }}
          </NuxtLink>
        </nav>

        <!-- ปุ่ม Hamburger: แสดงเฉพาะมือถือ -->
        <div class="flex items-center gap-1 md:hidden">
          <button
            type="button"
            class="header-menu-btn flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 active:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            :aria-label="isDark ? t('theme.switchToLight') : t('theme.switchToDark')"
            @click="toggleTheme"
          >
            <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
          <button
            type="button"
            class="header-menu-btn flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 active:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label="Open menu"
            :aria-expanded="mobileOpen"
            @click="toggleMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer: เฉพาะ client + Teleport ไป body -->
    <ClientOnly>
      <Teleport to="body">
        <div
          v-show="mobileOpen"
          class="mobile-drawer fixed inset-0 z-[9998] md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="เมนู"
      >
        <div
          class="absolute inset-0 bg-black/50"
          aria-label="ปิดเมนู"
          @click="closeMenu"
        />
        <div
          class="drawer-panel absolute right-0 top-0 bottom-0 w-full max-w-[280px] flex flex-col border-l border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
          @click.stop
        >
          <div class="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
            <span class="font-semibold text-[var(--color-aia-red)]">เมนู</span>
            <button
              type="button"
              class="flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Close menu"
              @click="closeMenu"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav class="flex-1 overflow-y-auto p-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="localePath(item.to)"
              class="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-red-50 hover:text-[var(--color-aia-red)] dark:text-slate-200 dark:hover:bg-red-950/40"
              :class="isActive(item.to) ? 'bg-red-50 text-[var(--color-aia-red)] dark:bg-red-950/40' : ''"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
            <div class="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <p class="mb-2 px-4 text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">ภาษา / Language</p>
              <div class="flex gap-2">
                <NuxtLink
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  :to="switchLocalePath(loc.code)"
                  @click="setLocaleThenClose(loc.code)"
                  :class="[
                    'flex flex-1 items-center justify-center gap-1 rounded-xl px-3 py-2.5 text-sm font-medium transition',
                    locale === loc.code
                      ? 'bg-[var(--color-aia-red)] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                  ]"
                >
                  <span class="text-lg">{{ loc.flag }}</span>
                  <span>{{ loc.name }}</span>
                </NuxtLink>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
              <span class="px-4 text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">{{ t('theme.label') }}</span>
              <button
                type="button"
                class="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                :aria-label="isDark ? t('theme.switchToLight') : t('theme.switchToDark')"
                @click="toggleTheme"
              >
                <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                {{ isDark ? t('theme.light') : t('theme.dark') }}
              </button>
            </div>
            <NuxtLink
              :to="localePath('/') + '#lead-form'"
              class="btn-primary mt-6 w-full justify-center"
              @click="closeMenuThenScroll"
            >
              {{ t('nav.consult') }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </Teleport>
    </ClientOnly>
    <main class="min-w-0 flex-1 overflow-x-hidden">
      <Transition name="page" mode="out-in">
        <slot />
      </Transition>
    </main>
    <footer class="min-w-0 border-t border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/80">
      <div class="container-wide section-pad">
        <div class="flex flex-wrap items-center gap-3">
          <img :src="logoAia" alt="AIA" class="h-7 w-auto object-contain opacity-90" />
          <p class="font-semibold text-[var(--color-aia-red)]">{{ t('footer.agent') }}</p>
        </div>
        <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ t('footer.tagline') }}</p>
        <p class="mt-4 flex flex-wrap items-center gap-x-1 text-xs text-slate-500 dark:text-slate-500">
          <span class="font-medium text-slate-600 dark:text-slate-400">{{ t('area.navLabel') }}:</span>
          <template v-for="(a, i) in areaSlugs" :key="a.slug">
            <NuxtLink :to="localePath(`/area/${a.slug}`)" class="text-[var(--color-aia-red)] hover:underline">{{ locale === 'th' ? a.nameTh : a.nameEn }}</NuxtLink>
            <span v-if="i < areaSlugs.length - 1"> · </span>
          </template>
        </p>
        <p class="mt-6 text-xs text-slate-500 dark:text-slate-500">© {{ new Date().getFullYear() }} {{ t('footer.rights') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import logoAia from '~/assets/img/logoaianobg.png'
useSeo()
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { isDark, setTheme, init: initTheme } = useTheme()

const areaSlugs = [
  { slug: 'udon-thani', nameTh: 'อุดรธานี', nameEn: 'Udon Thani' },
  { slug: 'khon-kaen', nameTh: 'ขอนแก่น', nameEn: 'Khon Kaen' },
  { slug: 'nong-khai', nameTh: 'หนองคาย', nameEn: 'Nong Khai' },
  { slug: 'nong-bua-lamphu', nameTh: 'หนองบัวลำภู', nameEn: 'Nong Bua Lamphu' },
  { slug: 'loei', nameTh: 'เลย', nameEn: 'Loei' },
  { slug: 'sakon-nakhon', nameTh: 'สกลนคร', nameEn: 'Sakon Nakhon' },
  { slug: 'bueng-kan', nameTh: 'บึงกาฬ', nameEn: 'Bueng Kan' },
  { slug: 'nakhon-ratchasima', nameTh: 'โคราช', nameEn: 'Korat' }
]

onMounted(() => {
  initTheme()
})

function toggleTheme () {
  setTheme(isDark.value ? 'light' : 'dark')
}

const availableLocales = computed(() => [
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
])

const navItems = computed(() => {
  const _ = locale.value
  return [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/articles', label: t('nav.articles') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/contact', label: t('nav.contact') }
  ]
})

const mobileOpen = ref(false)
const route = useRoute()

watch(mobileOpen, (open) => {
  if (import.meta.client && typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

function isActive (to: string) {
  const path = route.path
  const localePrefix = locale.value === 'th' ? '' : `/${locale.value}`
  const target = to === '/' ? (localePrefix || '/') : `${localePrefix}${to}`
  if (to === '/articles') return path === target || path.startsWith(target + '/')
  if (to === '/portfolio') return path === target || path.startsWith(target + '/')
  if (to.startsWith('/area')) return path === target || path.startsWith(target + '/')
  return path === target
}

function toggleMenu () {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu () {
  mobileOpen.value = false
}

function closeMenuThenScroll () {
  mobileOpen.value = false
  scrollToLead()
}

function setLocaleThenClose (code: string) {
  setLocale(code)
  mobileOpen.value = false
}

function scrollToLead () {
  if (typeof document === 'undefined') return
  const el = document.getElementById('lead-form')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>
