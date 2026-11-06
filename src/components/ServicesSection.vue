<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import PendingTag from './PendingTag.vue'
import { site, visible, contactUrl } from '../config/site'
</script>
<template>
  <section id="servicos" class="bg-graphite py-24 md:py-40">
    <div class="mx-auto max-w-7xl px-5 md:px-10">
      <h2 v-reveal class="display h-lg">Serviços</h2>
      <ul class="mt-14 divide-y divide-steel border-y border-steel">
        <li v-for="s in visible(site.services)" :key="s.title" v-reveal>
          <a :href="contactUrl()" target="_blank" rel="noopener" class="group grid gap-4 py-8 transition-colors hover:bg-ink md:grid-cols-12 md:items-center md:px-4">
            <h3 class="display text-4xl md:col-span-5 md:text-6xl">{{ s.title }}<PendingTag :show="s.pending" /></h3>
            <p class="text-mist md:col-span-4">{{ s.text }}</p>
            <span class="flex items-center gap-2 font-semibold text-ember md:col-span-3 md:justify-end">{{ s.cta }}<ArrowUpRight class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" :size="20" /></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
