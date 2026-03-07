export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  compatibilityDate: '2025-01-01',
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'th', language: 'th-TH', name: 'ไทย', file: 'th.json' },
      { code: 'lo', language: 'lo-LA', name: 'ລາວ', file: 'lo.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'th',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    restructureDir: false,
    detectBrowserLanguage: false
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://aia-advisor.example.com',
      siteName: 'พรปวีณ์ ศรีพิมพ์สอ | ตัวแทนประกัน AIA ภาคอีสาน'
    }
  },
  app: {
    head: {
      titleTemplate: (titleChunk) => {
        const homeTitle = 'ตัวแทน AIA อุดรธานี | ประกันสุขภาพ AIA | ปรึกษาฟรี | สมัครประกัน AIA ภาคอีสาน ขอนแก่น หนองคาย'
        if (!titleChunk) return homeTitle
        if (titleChunk === homeTitle || titleChunk.startsWith('ตัวแทน AIA อุดรธานี |')) return titleChunk
        return `${titleChunk} | พรปวีณ์ ศรีพิมพ์สอ ตัวแทน AIA`
      },
      htmlAttrs: { lang: 'th' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'ตัวแทน AIA อุดรธานี ภาคอีสาน — ประกันชีวิต ประกันสุขภาพ AIA ขอนแก่น หนองคาย หนองบัว เลย สกลนคร บึงกาฬ เช็คเบี้ยฟรี วางแผนไม่ขายเกินจำเป็น พรปวีณ์ ศรีพิมพ์สอ' },
        { name: 'keywords', content: 'ตัวแทนประกันชีวิต AIA, สมัครประกัน AIA, ทำประกัน AIA ออนไลน์, ประกันสุขภาพ AIA, ตัวแทน AIA อุดรธานี, ประกันชีวิต ขอนแก่น, ตัวแทน AIA ภาคอีสาน, สมัครประกัน AIA โคราช, ตัวแทน AIA หนองคาย, ตัวแทน AIA สกลนคร, ตัวแทน AIA บึงกาฬ, เช็คเบี้ยฟรี, ลดหย่อนภาษีประกันชีวิต, เคลมประกัน AIA, เปรียบเทียบแผนประกัน AIA' },
        { name: 'author', content: 'พรปวีณ์ ศรีพิมพ์สอ' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#e4002b' },
        { name: 'geo.region', content: 'TH-41' },
        { name: 'geo.placename', content: 'อุดรธานี' },
        { name: 'geo.position', content: '17.4152;102.7850' },
        { name: 'ICBM', content: '17.4152, 102.7850' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'พรปวีณ์ ศรีพิมพ์สอ ตัวแทน AIA ภาคอีสาน' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})
