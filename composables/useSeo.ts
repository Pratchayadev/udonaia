/**
 * SEO composable: canonical, og:* with full URLs, and JSON-LD for LocalBusiness.
 * Targets: อุดรธานี ขอนแก่น หนองคาย หนองบัว เลย สกลนคร ภาคอีสาน ลาว
 */
export function useSeo(options: {
  title?: string | (() => string)
  description?: string | (() => string)
  image?: string
  path?: string
  noIndex?: boolean
} = {}) {
  const config = useRuntimeConfig().public
  const { t, locale } = useI18n()
  const route = useRoute()
  const path = options.path ?? route.path
  const baseUrl = (config as { siteUrl?: string }).siteUrl || ''

  const getTitle = () =>
    typeof options.title === 'function' ? options.title() : options.title ?? t('seo.defaultTitle')
  const getDescription = () =>
    typeof options.description === 'function'
      ? options.description()
      : options.description ?? t('seo.defaultDescription')
  const canonical = baseUrl ? `${baseUrl}${path}` : ''
  const ogImage = options.image ?? (baseUrl ? `${baseUrl}/og-image.png` : '')

  const switchLocalePath = useSwitchLocalePath()
  const hreflangLinks = baseUrl
    ? [
        { rel: 'alternate', hreflang: 'th', href: `${baseUrl}${switchLocalePath('th')}` },
        { rel: 'alternate', hreflang: 'en', href: `${baseUrl}${switchLocalePath('en')}` },
        { rel: 'alternate', hreflang: 'lo', href: `${baseUrl}${switchLocalePath('lo')}` },
        { rel: 'alternate', hreflang: 'x-default', href: `${baseUrl}${switchLocalePath('th')}` }
      ]
    : []

  useHead({
    title: () => getTitle(),
    htmlAttrs: { lang: locale === 'th' ? 'th' : locale === 'lo' ? 'lo' : 'en' },
    link: [
      ...(canonical ? [{ rel: 'canonical', href: canonical }] : []),
      ...hreflangLinks
    ],
    meta: [
      ...(options.noIndex ? [{ name: 'robots', content: 'noindex, follow' as const }] : []),
    ],
  })

  useSeoMeta({
    description: () => getDescription(),
    ogTitle: () => getTitle(),
    ogDescription: () => getDescription(),
    ogImage: () => (ogImage ? [ogImage] : []),
    ogUrl: () => canonical || undefined,
    ogLocale: () => (locale === 'th' ? 'th_TH' : locale === 'lo' ? 'lo_LA' : 'en_US'),
    twitterCard: 'summary_large_image',
    twitterTitle: () => getTitle(),
    twitterDescription: () => getDescription(),
    twitterImage: () => ogImage || undefined,
  })

  // JSON-LD: InsuranceAgency (LocalBusiness) with address & geo for Local SEO
  const areaServed = [
    'อุดรธานี',
    'ขอนแก่น',
    'หนองคาย',
    'หนองบัวลำภู',
    'เลย',
    'สกลนคร',
    'บึงกาฬ',
    'นครราชสีมา',
    'ภาคอีสาน',
    'ประเทศไทย',
    'ลาว',
  ]
  const jsonLdBase = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'พรปวีณ์ ศรีพิมพ์สอ ตัวแทนประกัน AIA อุดรธานี',
    url: baseUrl || canonical,
    image: ogImage || undefined,
    priceRange: '฿฿',
    slogan: 'วางแผนประกันอย่างเข้าใจ ไม่ขายเกินความจำเป็น',
    knowsAbout: [
      'ประกันชีวิต',
      'ประกันสุขภาพ',
      'ประกันสุขภาพ AIA',
      'ประกันอุบัติเหตุ',
      'วางแผนการเงิน',
      'ลดหย่อนภาษี',
      'AIA',
      'ตัวแทน AIA อุดรธานี',
    ],
    areaServed: areaServed.map((name) => ({ '@type': 'Place', name })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'อุดรธานี',
      addressLocality: 'อุดรธานี',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4152,
      longitude: 102.785,
    },
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: () =>
          JSON.stringify({
            ...jsonLdBase,
            description: getDescription(),
          }),
      },
    ],
  })
}
