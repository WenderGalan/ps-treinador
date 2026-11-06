<script setup lang="ts">
import { site } from "../config/site"
</script>
<template>
  <section v-if="site.results.enabled && site.results.items.length" id="resultados" class="py-24 md:py-40">
    <div class="mx-auto max-w-7xl px-5 md:px-10">
      <h2 v-reveal class="display h-lg">Resultados</h2>
      <figure v-for="r in site.results.items" :key="r.name" v-reveal class="mt-12 max-w-2xl"><blockquote class="text-2xl">{{ r.text }}</blockquote><figcaption class="mt-3 text-mist">{{ r.name }}</figcaption></figure>
    </div>
  </section>
</template>
