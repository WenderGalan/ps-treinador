<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { site, contactUrl } from '../config/site'
const open = ref(false), scrolled = ref(false)
const links = [['Sobre', '#sobre'], ['Método', '#metodo'], ['Serviços', '#servicos'], ['Instagram', '#instagram'], ['FAQ', '#faq']]
const on = () => (scrolled.value = scrollY > 40)
onMounted(() => { on(); addEventListener('scroll', on, { passive: true }) }); onUnmounted(() => removeEventListener('scroll', on))
</script>
<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="scrolled || open ? 'bg-ink/90 backdrop-blur py-3' : 'py-6'">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
      <a href="#top" class="display text-3xl" aria-label="PS Treinador — início">{{ site.brand.short }}<span class="text-ember">.</span></a>
      <nav class="hidden items-center gap-8 md:flex" aria-label="Principal">
        <a v-for="l in links" :key="l[1]" :href="l[1]" class="text-sm text-mist transition-colors hover:text-bone">{{ l[0] }}</a>
        <a :href="contactUrl()" target="_blank" rel="noopener" class="btn btn-primary !min-h-10 !px-5">FALAR AGORA</a>
      </nav>
      <button class="grid h-12 w-12 place-items-center md:hidden" :aria-expanded="open" aria-label="Menu" @click="open = !open"><component :is="open ? X : Menu" /></button>
    </div>
    <nav v-show="open" class="fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-ink px-5 pt-20 md:hidden" aria-label="Mobile">
      <a v-for="l in links" :key="l[1]" :href="l[1]" class="display h-lg py-1" @click="open = false">{{ l[0] }}</a>
      <a :href="contactUrl()" target="_blank" rel="noopener" class="btn btn-primary mt-6">FALAR AGORA</a>
    </nav>
  </header>
</template>
