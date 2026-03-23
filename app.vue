<template>
  <div class="min-w-0">
    <SpeedInsights />
    <PageLoadingScreen />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>
