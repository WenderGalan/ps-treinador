<script setup lang="ts">
import PlaceholderImage from './PlaceholderImage.vue'
import PendingTag from './PendingTag.vue'
import { site } from '../config/site'
</script>
<template>
  <section id="sobre" class="bg-bone py-24 text-ink md:py-40">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-10">
      <div v-reveal class="md:col-span-5 md:mt-24"><PlaceholderImage v-bind="site.images.about" /></div>
      <div class="md:col-span-7 md:pl-10">
        <h2 v-reveal class="display h-lg">{{ site.about.title }}</h2>
        <div class="mt-10 max-w-xl space-y-5 text-lg leading-relaxed md:ml-16">
          <p v-for="(p, i) in site.about.paragraphs" :key="i" v-reveal="i * 120">{{ p }}<PendingTag :show="site.about.pending" /></p>
        </div>
      </div>
    </div>
  </section>
</template>
