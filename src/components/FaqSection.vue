<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import PendingTag from './PendingTag.vue'
import { site, visible } from '../config/site'
</script>
<template>
  <section id="faq" class="bg-bone py-24 text-ink md:py-40">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-10">
      <h2 v-reveal class="display h-lg md:col-span-4">Perguntas frequentes</h2>
      <div class="md:col-span-8">
        <details v-for="f in visible(site.faq)" :key="f.q" class="group border-b border-ink/20 py-6">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold"><span>{{ f.q }}<PendingTag :show="f.pending" /></span><Plus class="shrink-0 transition-transform group-open:rotate-45" /></summary>
          <p class="mt-4 max-w-xl text-ink/70">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
