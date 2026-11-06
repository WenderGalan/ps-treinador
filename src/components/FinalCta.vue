<script setup lang="ts">
import PlaceholderImage from './PlaceholderImage.vue'
import { site, contactUrl } from '../config/site'
</script>
<template>
  <section class="relative isolate overflow-hidden py-32 md:py-48">
    <div class="absolute inset-0 -z-10 opacity-40"><PlaceholderImage v-bind="site.images.cta" ratio="auto" class="h-full [&>*]:h-full" /></div>
    <div class="mx-auto max-w-7xl px-5 md:px-10">
      <h2 v-reveal class="display h-xl max-w-5xl">{{ site.finalCta.title }}</h2>
      <p class="mt-6 max-w-md text-lg text-mist">{{ site.finalCta.text }}</p>
      <a :href="contactUrl()" target="_blank" rel="noopener" class="btn btn-primary mt-10">{{ site.finalCta.button }}</a>
    </div>
  </section>
</template>
