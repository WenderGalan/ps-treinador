<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MethodSection from './components/MethodSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ResultsSection from './components/ResultsSection.vue'
import InstagramSection from './components/InstagramSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:bg-ember focus:p-3 focus:text-ink">Ir para o conteúdo</a>
  <SiteHeader />
  <main id="main"><HeroSection /><AboutSection /><MethodSection /><ServicesSection /><ResultsSection /><InstagramSection /><FaqSection /><FinalCta /></main>
  <SiteFooter />
</template>
