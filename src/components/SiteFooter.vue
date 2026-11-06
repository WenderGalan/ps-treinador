<script setup lang="ts">
import PendingTag from './PendingTag.vue'
import { site } from '../config/site'
</script>
<template>
  <footer class="border-t border-steel py-12">
    <div class="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-mist md:flex-row md:justify-between md:px-10">
      <div><p class="display text-3xl text-bone">{{ site.brand.name }}<PendingTag :show="site.brand.pending" /></p><p class="mt-2">{{ site.registry.text }}<PendingTag :show="site.registry.pending" /></p></div>
      <div class="space-y-1"><a :href="site.instagram.url" target="_blank" rel="noopener" class="block hover:text-bone">Instagram {{ site.instagram.handle }}</a><p v-if="site.whatsapp.number">WhatsApp: {{ site.whatsapp.number }}</p><p v-else>WhatsApp: a informar<PendingTag show /></p></div>
      <p>© {{ new Date().getFullYear() }} {{ site.brand.name }}. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>
