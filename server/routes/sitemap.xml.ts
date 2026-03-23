export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event).public
  const baseUrl = (config as { siteUrl?: string }).siteUrl || 'https://udonaia.com'
  const locales = ['', '/en', '/lo'] // default th, en, lo
  const paths = [
    '',
    '/about',
    '/services',
    '/articles',
    '/articles/health-sum',
    '/articles/high-converting',
    '/articles/agent-udon-5-reasons',
    '/articles/hospital-aia-kk-korat',
    '/articles/delivery-20-provinces',
    '/articles/review-aia-health-happy',
    '/articles/compare-savings-pension',
    '/articles/newbie-3-steps',
    '/articles/claim-nongkhai-buengkan',
    '/articles/insure-while-healthy',
    '/articles/aia-vitality',
    '/articles/aia-partner-benefits',
    '/articles/health-necessary-2025',
    '/articles/aia-health-good',
    '/articles/agent-udon-free-consult',
    '/articles/cancer-treatment-cost-thailand',
    '/articles/buy-through-agent-or-self',
    '/articles/elderly-health-laos-aia',
    '/articles/copayment-aia-health',
    '/articles/health-coverage-what',
    '/articles/choose-insurance-not-scammed',
    '/articles/choose-health-insurance-guide',
    '/articles/aia-health-good-2026',
    '/articles/aia-lump-sum-guide',
    '/articles/aia-new-health-standard',
    '/articles/aia-company-history-asia',
    '/articles/aia-health-worth-2026',
    '/articles/why-udon-prefers-aia-2026',
    '/contact',
    '/portfolio',
    '/area/udon-thani',
    '/area/khon-kaen',
    '/area/nong-khai',
    '/area/nong-bua-lamphu',
    '/area/loei',
    '/area/sakon-nakhon',
    '/area/bueng-kan',
    '/area/nakhon-ratchasima'
  ]
  const urls = locales.flatMap((loc) =>
    paths.map((p) => `${baseUrl}${loc}${p || '/'}`.replace(/\/+/g, '/'))
  )
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n')}
</urlset>`
  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  return xml
})
