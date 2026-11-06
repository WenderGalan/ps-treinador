<script setup lang="ts">
import { Instagram } from 'lucide-vue-next'
import PendingTag from './PendingTag.vue'
import { site } from '../config/site'
const s = site.instagramSection
</script>
<template>
  <section id="instagram" class="py-24 md:py-40">
    <div class="mx-auto max-w-7xl px-5 md:px-10">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 v-reveal class="display h-lg max-w-3xl">{{ s.title }}</h2>
        <a :href="site.instagram.url" target="_blank" rel="noopener" class="btn btn-ghost gap-2"><Instagram :size="18" />{{ site.instagram.handle }}</a>
      </div>
      <p class="mt-6 max-w-md text-mist">{{ s.text }}<PendingTag :show="s.pending" /></p>
      <div class="mt-14 grid gap-px bg-steel md:grid-cols-3">
        <a v-for="(c, i) in s.cards" :key="c.title" v-reveal="i * 100" :href="site.instagram.url" target="_blank" rel="noopener" class="group bg-ink p-8 transition-colors hover:bg-ember hover:text-ink md:min-h-64">
          <h3 class="wide text-xl">{{ c.title }}</h3><p class="mt-3 text-mist group-hover:text-ink">{{ c.text }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
