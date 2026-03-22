<script setup lang="ts">
const props = defineProps<{
  keyword: string
  to: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const label = computed(() => t(`homeContent.kw.${props.keyword}`))
</script>

<template>
  <NuxtLink
    :to="localePath(to)"
    class="font-semibold text-[var(--color-aia-red)] underline decoration-transparent underline-offset-2 transition hover:decoration-current"
  >
    <b>{{ label }}</b>
  </NuxtLink>
</template>
