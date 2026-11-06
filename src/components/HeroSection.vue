<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PlaceholderImage from './PlaceholderImage.vue'
import { site, contactUrl } from '../config/site'
const y = ref(0); let raf = 0
const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => (y.value = Math.min(scrollY, 900) * 0.15)) }
onMounted(() => addEventListener('scroll', on, { passive: true })); onUnmounted(() => removeEventListener('scroll', on))
const words = site.hero.headline.split('. ')
</script>
<template>
  <section id="top" class="relative flex min-h-[100svh] items-end overflow-hidden">
    <div class="absolute inset-0 md:left-[28%]" :style="{ transform: `translateY(${y}px) scale(1.08)` }">
      <PlaceholderImage v-bind="site.images.hero" ratio="auto" eager sizes="100vw" class="h-full [&>*]:h-full" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30 md:bg-gradient-to-r md:from-ink md:via-ink/70 md:to-transparent"></div>
    <div class="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-10">
      <h1 class="display h-xl max-w-5xl">
        <span v-for="(w, i) in words" :key="i" class="line"><span :style="{ '--d': i * 140 + 200 + 'ms' }">{{ w }}{{ i < words.length - 1 ? '.' : '' }}</span></span>
      </h1>
      <p class="mt-6 max-w-md text-lg text-mist" style="animation: fade 1s 900ms both">{{ site.hero.sub }}</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row" style="animation: fade 1s 1100ms both">
        <a :href="contactUrl()" target="_blank" rel="noopener" class="btn btn-primary">{{ site.hero.cta1 }}</a>
        <a href="#sobre" class="btn btn-ghost">{{ site.hero.cta2 }}</a>
      </div>
      <a href="#sobre" class="absolute bottom-6 right-5 hidden items-center gap-3 text-xs text-mist md:flex" aria-label="Rolar para explorar">Explorar<span class="h-12 w-px bg-ember" style="animation: drop 2s infinite"></span></a>
    </div>
  </section>
</template>
