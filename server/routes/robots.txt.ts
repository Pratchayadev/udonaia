export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event).public
  const baseUrl = (config as { siteUrl?: string }).siteUrl || ''
  const body = `User-agent: *
Allow: /
${baseUrl ? `Sitemap: ${baseUrl.replace(/\/$/, '')}/sitemap.xml` : ''}
`
  setHeader(event, 'Content-Type', 'text/plain')
  setHeader(event, 'Cache-Control', 'public, max-age=86400')
  return body
})
